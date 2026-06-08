import Link from "next/link";
import { notFound } from "next/navigation";
import { MetricCard } from "@/components/metric-card";
import { PageShell } from "@/components/page-shell";
import { PlaceholderChart } from "@/components/placeholder-chart";
import { StatusBadge } from "@/components/status-badge";
import { getIndicatorBySlug, indicators } from "@/lib/mock-data";

export function generateStaticParams() {
  return indicators.map((indicator) => ({ slug: indicator.slug }));
}

export default async function IndicatorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const indicator = getIndicatorBySlug(slug);

  if (!indicator) {
    notFound();
  }

  const delta = indicator.currentValue - indicator.previousValue;

  return (
    <PageShell
      eyebrow={indicator.shortName}
      title={indicator.name}
      description={indicator.description}
      actions={
        <Link
          href={`/indicators/${indicator.slug}/posts`}
          className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          토론방 보기
        </Link>
      }
    >
      <section className="grid gap-4 md:grid-cols-4">
        <MetricCard label="현재 지수" value={`${indicator.currentValue}${indicator.unit}`} helper={`전일 대비 ${delta >= 0 ? "+" : ""}${delta}`} />
        <MetricCard label="언급량" value={indicator.metrics.mentions.toLocaleString()} helper={indicator.sourceLabel} />
        <MetricCard label="패닉 점수" value={`${indicator.metrics.panicScore}%`} helper="무서운데 매수한 흔적" />
        <MetricCard label="확신 점수" value={`${indicator.metrics.confidenceScore}%`} helper="틀릴 수 없다는 말투" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
        <PlaceholderChart points={indicator.history} />
        <aside className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-950">해석</h2>
            <StatusBadge status={indicator.status} />
          </div>
          <p className="mt-5 text-3xl font-semibold text-zinc-950">
            {indicator.currentValue}
            <span className="text-base text-zinc-500">{indicator.unit}</span>
          </p>
          <p className="mt-4 rounded-lg bg-zinc-50 p-4 text-sm leading-6 text-zinc-700">{indicator.roastLine}</p>
          <p className="mt-4 text-sm leading-6 text-zinc-600">{indicator.interpretation}</p>
          <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-zinc-100 pt-5 text-sm">
            <div>
              <dt className="text-zinc-500">업데이트</dt>
              <dd className="mt-1 font-medium text-zinc-950">{indicator.updatedAt}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">추세</dt>
              <dd className="mt-1 font-medium text-zinc-950">{indicator.trend}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </PageShell>
  );
}
