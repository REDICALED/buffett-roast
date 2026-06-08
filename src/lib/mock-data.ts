import type { DiscussionPost, Indicator, SignalFeedItem } from "@/types";

export const indicators: Indicator[] = [
  {
    slug: "buffett-roast-index",
    name: "워렌 버핏 조롱지수",
    shortName: "Buffett Roast",
    description:
      "커뮤니티에서 버핏식 현금 보유와 가치투자를 얼마나 놀리는지 추적하는 가상 밈 심리 지표입니다.",
    currentValue: 82,
    previousValue: 71,
    unit: "점",
    status: "overheated",
    trend: "up",
    updatedAt: "2026-06-08 09:30 KST",
    sourceLabel: "국내 주식 커뮤니티 모의 수집",
    roastLine: "현금 들고 있으면 또 할아버지 소리 듣는 장입니다.",
    interpretation:
      "버핏 조롱이 과열권입니다. 모두가 느린 돈을 비웃을 때, 보통 느린 돈은 조용히 메모를 합니다.",
    history: [
      { label: "5/30", value: 38 },
      { label: "5/31", value: 42 },
      { label: "6/1", value: 47 },
      { label: "6/2", value: 55 },
      { label: "6/3", value: 63 },
      { label: "6/4", value: 58 },
      { label: "6/5", value: 66 },
      { label: "6/6", value: 73 },
      { label: "6/7", value: 71 },
      { label: "6/8", value: 82 },
    ],
    metrics: {
      mentions: 12840,
      roastRatio: 68,
      panicScore: 24,
      confidenceScore: 91,
    },
  },
  {
    slug: "kospi-escape-index",
    name: "국장 탈출지수",
    shortName: "Kospi Escape",
    description:
      "국장을 접고 미장으로 떠난다는 선언의 밀도를 보는 준비 중 지표입니다.",
    currentValue: 57,
    previousValue: 61,
    unit: "점",
    status: "warming",
    trend: "down",
    updatedAt: "준비 중",
    sourceLabel: "Mock only",
    roastLine: "환전 수수료까지 감성비로 계산하는 구간입니다.",
    interpretation: "정식 산식 공개 전입니다. 대시보드에서는 예고 카드로만 표시합니다.",
    history: [
      { label: "5/30", value: 64 },
      { label: "5/31", value: 62 },
      { label: "6/1", value: 60 },
      { label: "6/2", value: 59 },
      { label: "6/3", value: 63 },
      { label: "6/4", value: 61 },
      { label: "6/5", value: 58 },
      { label: "6/6", value: 55 },
      { label: "6/7", value: 61 },
      { label: "6/8", value: 57 },
    ],
    metrics: {
      mentions: 6340,
      roastRatio: 41,
      panicScore: 52,
      confidenceScore: 38,
    },
  },
  {
    slug: "all-in-declaration-index",
    name: "풀매수 선언지수",
    shortName: "All-in Call",
    description:
      "월급, 적금, 비상금까지 한 문장에 등장하는 빈도를 보는 준비 중 지표입니다.",
    currentValue: 44,
    previousValue: 39,
    unit: "점",
    status: "closed",
    trend: "up",
    updatedAt: "준비 중",
    sourceLabel: "Mock only",
    roastLine: "이번엔 진짜 인생 매수라는 문장이 늘고 있습니다.",
    interpretation: "정식 산식 공개 전입니다. 대시보드에서는 예고 카드로만 표시합니다.",
    history: [
      { label: "5/30", value: 22 },
      { label: "5/31", value: 25 },
      { label: "6/1", value: 26 },
      { label: "6/2", value: 31 },
      { label: "6/3", value: 29 },
      { label: "6/4", value: 35 },
      { label: "6/5", value: 36 },
      { label: "6/6", value: 40 },
      { label: "6/7", value: 39 },
      { label: "6/8", value: 44 },
    ],
    metrics: {
      mentions: 2910,
      roastRatio: 33,
      panicScore: 16,
      confidenceScore: 74,
    },
  },
];

export const posts: DiscussionPost[] = [
  {
    id: "101",
    indicatorSlug: "buffett-roast-index",
    title: "버핏 또 현금 들고 있다는데 이제는 그냥 적금왕 아닌가요",
    author: "장투는내일부터",
    body:
      "커뮤니티 분위기 보면 현금 들고 있는 사람은 전부 시대에 뒤처진 사람 취급입니다. 근데 막상 이런 말이 많아질수록 제 계좌는 이상하게 겁이 납니다.",
    sentiment: "bearish",
    createdAt: "2026-06-08 10:12",
    comments: 48,
    likes: 132,
    tags: ["현금왕", "고점논쟁", "가치투자"],
  },
  {
    id: "102",
    indicatorSlug: "buffett-roast-index",
    title: "조롱지수 80 넘으면 대체로 댓글창이 제일 자신감 넘침",
    author: "분할매수요정",
    body:
      "차트보다 댓글창 말투가 더 빠릅니다. 다들 본인이 이번 사이클의 주인공이라고 확신하는데, 그 확신이 지표에 그대로 찍힌 느낌입니다.",
    sentiment: "neutral",
    createdAt: "2026-06-08 09:44",
    comments: 31,
    likes: 88,
    tags: ["댓글지표", "심리과열"],
  },
  {
    id: "103",
    indicatorSlug: "buffett-roast-index",
    title: "버핏 조롱하고 나서 매수 버튼 누르면 손이 좀 빨라짐",
    author: "계좌는콘텐츠",
    body:
      "나만 그런 줄 알았는데 친구들도 똑같이 말합니다. 누군가를 조롱해야 내 매수가 덜 무서워지는 장입니다.",
    sentiment: "panic",
    createdAt: "2026-06-07 23:18",
    comments: 67,
    likes: 205,
    tags: ["풀매수", "자기암시"],
  },
];

export const signalFeed: SignalFeedItem[] = [
  {
    id: "sig-001",
    time: "01:58Z",
    source: "DCinside mock",
    title: "버핏 현금 보유 조롱 키워드 급증",
    body: "현금왕, 적금왕, 할아버지 투자법 키워드가 2시간 평균 대비 192% 증가했습니다.",
    severity: "high",
    matchScore: 96,
  },
  {
    id: "sig-002",
    time: "01:42Z",
    source: "Blind mock",
    title: "월급날 풀매수 선언 증가",
    body: "월급 들어오자마자 전액 투입했다는 인증성 문장이 전일 같은 시간 대비 늘었습니다.",
    severity: "medium",
    matchScore: 78,
  },
  {
    id: "sig-003",
    time: "01:17Z",
    source: "Naver Cafe mock",
    title: "가치투자 조롱 댓글 확산",
    body: "느린 돈, 기회비용, 버핏도 코인 했으면 키워드가 같은 스레드에서 반복 감지됐습니다.",
    severity: "high",
    matchScore: 91,
  },
  {
    id: "sig-004",
    time: "00:53Z",
    source: "Telegram mock",
    title: "국장 탈출 밈은 보합",
    body: "환전 인증은 늘었지만 국장 접는다는 문장은 전주 평균과 비슷한 수준입니다.",
    severity: "low",
    matchScore: 63,
  },
];

export function getFeaturedIndicator() {
  return indicators[0];
}

export function getIndicatorBySlug(slug: string) {
  return indicators.find((indicator) => indicator.slug === slug);
}

export function getPostsByIndicator(slug: string) {
  return posts.filter((post) => post.indicatorSlug === slug);
}

export function getPostById(indicatorSlug: string, postId: string) {
  return posts.find((post) => post.indicatorSlug === indicatorSlug && post.id === postId);
}
