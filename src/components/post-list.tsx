import Link from "next/link";
import type { DiscussionPost } from "@/types";

const sentimentClass: Record<DiscussionPost["sentiment"], string> = {
  bullish: "bg-emerald-50 text-emerald-700",
  bearish: "bg-rose-50 text-rose-700",
  neutral: "bg-zinc-100 text-zinc-700",
  panic: "bg-amber-50 text-amber-700",
};

export function PostList({ posts, indicatorSlug }: { posts: DiscussionPost[]; indicatorSlug: string }) {
  return (
    <div className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white shadow-sm">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/indicators/${indicatorSlug}/posts/${post.id}`}
          className="block p-5 transition hover:bg-zinc-50"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className={`inline-flex rounded-md px-2 py-1 text-xs font-semibold ${sentimentClass[post.sentiment]}`}>
                {post.sentiment}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-zinc-950">{post.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">{post.body}</p>
            </div>
            <div className="shrink-0 text-sm text-zinc-500 sm:text-right">
              <p>{post.author}</p>
              <p className="mt-1">{post.createdAt}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-500">
            <span>댓글 {post.comments}</span>
            <span>추천 {post.likes}</span>
            {post.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
