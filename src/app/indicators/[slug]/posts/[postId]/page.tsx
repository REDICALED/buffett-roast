import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { getIndicatorBySlug, getPostById, posts } from "@/lib/mock-data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.indicatorSlug, postId: post.id }));
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string; postId: string }>;
}) {
  const { slug, postId } = await params;
  const indicator = getIndicatorBySlug(slug);
  const post = getPostById(slug, postId);

  if (!indicator || !post) {
    notFound();
  }

  return (
    <PageShell
      eyebrow={indicator.name}
      title={post.title}
      description={`${post.author} · ${post.createdAt}`}
      actions={
        <Link
          href={`/indicators/${indicator.slug}/posts`}
          className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
        >
          목록으로
        </Link>
      }
    >
      <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 border-b border-zinc-100 pb-5 text-sm text-zinc-500">
          <span className="rounded-md bg-zinc-100 px-2 py-1 font-semibold text-zinc-700">{post.sentiment}</span>
          <span>댓글 {post.comments}</span>
          <span>추천 {post.likes}</span>
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <p className="mt-6 whitespace-pre-line text-base leading-8 text-zinc-700">{post.body}</p>
      </article>

      <section className="rounded-lg border border-zinc-200 bg-zinc-50 p-5">
        <h2 className="text-base font-semibold text-zinc-950">댓글 미리보기</h2>
        <div className="mt-4 grid gap-3">
          <p className="rounded-lg bg-white p-4 text-sm text-zinc-600">이 정도면 지표가 아니라 계좌 온도계네요.</p>
          <p className="rounded-lg bg-white p-4 text-sm text-zinc-600">조롱이 커질수록 현금이 덜 촌스러워 보입니다.</p>
        </div>
      </section>
    </PageShell>
  );
}
