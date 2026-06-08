import type { IndicatorStatus } from "@/types";

const statusCopy: Record<IndicatorStatus, string> = {
  overheated: "과열",
  warming: "예열",
  cooling: "냉각",
  closed: "준비 중",
};

const statusClass: Record<IndicatorStatus, string> = {
  overheated: "border-rose-200 bg-rose-50 text-rose-700",
  warming: "border-amber-200 bg-amber-50 text-amber-700",
  cooling: "border-sky-200 bg-sky-50 text-sky-700",
  closed: "border-zinc-200 bg-zinc-100 text-zinc-600",
};

export function StatusBadge({ status }: { status: IndicatorStatus }) {
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold ${statusClass[status]}`}>
      {statusCopy[status]}
    </span>
  );
}
