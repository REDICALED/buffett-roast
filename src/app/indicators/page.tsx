import { IndicatorCard } from "@/components/indicator-card";
import { PageShell } from "@/components/page-shell";
import { indicators } from "@/lib/mock-data";

export default function IndicatorsPage() {
  return (
    <PageShell
      eyebrow="Indicator catalog"
      title="밈 심리 지표 목록"
      description="정식 산식이 있는 지표와 준비 중인 지표를 함께 보여줍니다. 현재 활성 지표는 워렌 버핏 조롱지수입니다."
    >
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {indicators.map((indicator) => (
          <IndicatorCard key={indicator.slug} indicator={indicator} />
        ))}
      </section>
    </PageShell>
  );
}
