import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { PostList } from "@/components/post-list";
import { getIndicatorBySlug, getPostsByIndicator, indicators } from "@/lib/mock-data";

export function generateStaticParams() {
  return indicators.map((indicator) => ({ slug: indicator.slug }));
}

export default async function IndicatorPostsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const indicator = getIndicatorBySlug(slug);

  if (!indicator) {
    notFound();
  }

  const indicatorPosts = getPostsByIndicator(indicator.slug);

  return (
    <PageShell
      eyebrow="Discussion"
      title={`${indicator.name} 토론방`}
      description="실제 작성 기능은 아직 없고, 밈 분위기를 보여주기 위한 mock 게시글입니다."
      actions={
        <Link
          href={`/indicators/${indicator.slug}`}
          className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
        >
          지표 상세
        </Link>
      }
    >
      {indicatorPosts.length > 0 ? (
        <PostList posts={indicatorPosts} indicatorSlug={indicator.slug} />
      ) : (
        <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-500">
          아직 토론글이 없습니다. 준비 중인 지표입니다.
        </div>
      )}
    </PageShell>
  );
}
