import type { IndicatorHistoryPoint } from "@/types";

type PlaceholderChartProps = {
  points: IndicatorHistoryPoint[];
};

export function PlaceholderChart({ points }: PlaceholderChartProps) {
  const max = Math.max(...points.map((point) => point.value), 100);

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-950">Sentiment tape</p>
          <p className="text-xs text-zinc-500">외부 차트 라이브러리 없이 임시 렌더링</p>
        </div>
        <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600">Mock</span>
      </div>
      <div className="flex h-56 items-end gap-2 border-b border-l border-zinc-200 px-2 pt-6">
        {points.map((point) => (
          <div key={point.label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-t bg-zinc-900"
              style={{ height: `${Math.max(10, (point.value / max) * 190)}px` }}
              title={`${point.label}: ${point.value}`}
            />
            <span className="text-[10px] font-medium text-zinc-500">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
