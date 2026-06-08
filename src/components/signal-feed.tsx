import type { SignalFeedItem } from "@/types";

const severityClass: Record<SignalFeedItem["severity"], string> = {
  low: "bg-zinc-100 text-zinc-700",
  medium: "bg-amber-50 text-amber-700",
  high: "bg-rose-50 text-rose-700",
};

export function SignalFeed({ items }: { items: SignalFeedItem[] }) {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-zinc-200 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">OSINT Feed</p>
          <h2 className="mt-1 text-lg font-semibold text-zinc-950">커뮤니티 시그널</h2>
        </div>
        <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">LIVE</span>
      </div>
      <div className="divide-y divide-zinc-100">
        {items.map((item) => (
          <article key={item.id} className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-zinc-500">{item.time}</span>
                  <span className={`rounded px-2 py-1 text-xs font-semibold ${severityClass[item.severity]}`}>
                    {item.severity.toUpperCase()}
                  </span>
                  <span className="text-xs text-zinc-500">{item.source}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-zinc-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.body}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-lg font-semibold text-zinc-950">{item.matchScore}%</p>
                <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-500">match</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
