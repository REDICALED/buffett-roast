import type { Indicator } from "@/types";

export function LiveStatusPanel({ indicator }: { indicator: Indicator }) {
  const delta = indicator.currentValue - indicator.previousValue;

  return (
    <section className="rounded-lg border border-zinc-800 bg-zinc-950 p-5 text-white shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-300">
            Status: Operational
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
            BUFFETT ROAST INDEX
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            커뮤니티 조롱 신호를 감시해 투자심리 과열도를 추정하는 mock OSINT 터미널입니다.
          </p>
        </div>
        <div className="min-w-48 rounded-lg border border-rose-400/40 bg-rose-500/10 p-5 text-left md:text-right">
          <p className="text-sm font-semibold text-rose-200">ROASTCON 2</p>
          <p className="mt-2 text-5xl font-black">{indicator.currentValue}</p>
          <p className="mt-2 text-sm font-semibold text-rose-200">
            {delta >= 0 ? "+" : ""}
            {delta} / 24H
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-3 border-t border-zinc-800 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatusDatum label="LOCATIONS" value="8 SOURCES" />
        <StatusDatum label="REPORTS" value="40 SIGNALS" />
        <StatusDatum label="ALERTS" value="9 ACTIVE" />
        <StatusDatum label="UPDATED" value={indicator.updatedAt} />
      </div>
    </section>
  );
}

function StatusDatum({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-zinc-100">{value}</p>
    </div>
  );
}
