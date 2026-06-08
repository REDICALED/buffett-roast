import Link from "next/link";
import type { Indicator } from "@/types";
import { StatusBadge } from "@/components/status-badge";

export function IndicatorCard({ indicator }: { indicator: Indicator }) {
  const delta = indicator.currentValue - indicator.previousValue;
  const locked = indicator.status === "closed";

  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            {indicator.shortName}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-950">{indicator.name}</h2>
        </div>
        <StatusBadge status={indicator.status} />
      </div>
      <p className="mt-4 min-h-14 text-sm leading-6 text-zinc-600">{indicator.description}</p>
      <div className="mt-5 flex items-end justify-between border-t border-zinc-100 pt-5">
        <div>
          <p className="text-sm text-zinc-500">현재 지수</p>
          <p className="mt-1 text-3xl font-semibold text-zinc-950">
            {indicator.currentValue}
            <span className="text-base text-zinc-500">{indicator.unit}</span>
          </p>
        </div>
        <span className={delta >= 0 ? "text-sm font-semibold text-rose-700" : "text-sm font-semibold text-sky-700"}>
          {delta >= 0 ? "+" : ""}
          {delta}
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={`/indicators/${indicator.slug}`}
          className="rounded-md bg-zinc-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          상세 보기
        </Link>
        {!locked ? (
          <Link
            href={`/indicators/${indicator.slug}/posts`}
            className="rounded-md border border-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
          >
            토론방
          </Link>
        ) : null}
      </div>
    </article>
  );
}
