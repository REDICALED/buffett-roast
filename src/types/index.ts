export type TrendDirection = "up" | "down" | "flat";

export type IndicatorStatus = "overheated" | "warming" | "cooling" | "closed";

export type IndicatorHistoryPoint = {
  label: string;
  value: number;
};

export type Indicator = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  currentValue: number;
  previousValue: number;
  unit: string;
  status: IndicatorStatus;
  trend: TrendDirection;
  updatedAt: string;
  sourceLabel: string;
  roastLine: string;
  interpretation: string;
  history: IndicatorHistoryPoint[];
  metrics: {
    mentions: number;
    roastRatio: number;
    panicScore: number;
    confidenceScore: number;
  };
};

export type DiscussionPost = {
  id: string;
  indicatorSlug: string;
  title: string;
  author: string;
  body: string;
  sentiment: "bullish" | "bearish" | "neutral" | "panic";
  createdAt: string;
  comments: number;
  likes: number;
  tags: string[];
};

export type SignalFeedItem = {
  id: string;
  time: string;
  source: string;
  title: string;
  body: string;
  severity: "low" | "medium" | "high";
  matchScore: number;
};
