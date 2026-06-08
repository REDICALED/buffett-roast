import Link from "next/link";
import { IndicatorCard } from "@/components/indicator-card";
import { LiveStatusPanel } from "@/components/live-status-panel";
import { MetricCard } from "@/components/metric-card";
import { PlaceholderChart } from "@/components/placeholder-chart";
import { PostList } from "@/components/post-list";
import { SignalFeed } from "@/components/signal-feed";
import { getFeaturedIndicator, getPostsByIndicator, indicators, signalFeed } from "@/lib/mock-data";

export default function Home() {
  const featured = getFeaturedIndicator();
  const latestPosts = getPostsByIndicator(featured.slug).slice(0, 3);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8">
      <LiveStatusPanel indicator={featured} />

      <section className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Roast level" value={`${featured.currentValue}${featured.unit}`} helper={featured.roastLine} />
        <MetricCard label="Mentions" value={featured.metrics.mentions.toLocaleString()} helper="24시간 mock 수집" />
        <MetricCard label="Roast ratio" value={`${featured.metrics.roastRatio}%`} helper="놀림성 문맥 비율" />
        <MetricCard label="Confidence" value={`${featured.metrics.confidenceScore}%`} helper="댓글창 확신 농도" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-6">
          <PlaceholderChart points={featured.history} />
          <SignalFeed items={signalFeed} />
        </div>

        <aside className="grid content-start gap-4">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Monitored</p>
                <h2 className="mt-1 text-lg font-semibold text-zinc-950">감시 지표</h2>
              </div>
              <Link href="/indicators" className="text-sm font-semibold text-zinc-600 hover:text-zinc-950">
                전체
              </Link>
            </div>
            <div className="grid gap-3">
              {indicators.map((indicator) => (
                <IndicatorCard key={indicator.slug} indicator={indicator} compact />
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Discussion</p>
                <h2 className="mt-1 text-lg font-semibold text-zinc-950">토론방 핫라인</h2>
              </div>
              <Link
                href={`/indicators/${featured.slug}/posts`}
                className="text-sm font-semibold text-zinc-600 hover:text-zinc-950"
              >
                열기
              </Link>
            </div>
            <PostList posts={latestPosts} indicatorSlug={featured.slug} />
          </div>
        </aside>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <BriefCard
          label="History"
          title="왜 버핏 조롱을 보나"
          body="시장이 빠르게 오를수록 느린 투자자를 조롱하는 말투가 늘어납니다. 이 사이트는 그 말투를 과열 신호처럼 보여주는 콘셉트입니다."
        />
        <BriefCard
          label="Method"
          title="현재는 전부 mock data"
          body="실제 API, 크롤링, 자연어 분석은 아직 없습니다. 화면 구조와 라우팅을 먼저 잡기 위한 정적 데이터입니다."
        />
        <BriefCard
          label="Market Intel"
          title="나중에 붙일 수 있는 것"
          body="커뮤니티 키워드 수집, 키워드별 감성 점수, 종목 언급량, 예측시장 링크 같은 섹션을 붙일 수 있습니다."
        />
      </section>
    </main>
  );
}

function BriefCard({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">{label}</p>
      <h2 className="mt-3 text-lg font-semibold text-zinc-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{body}</p>
    </article>
  );
}
