/**
 * TestWell 공개 서비스와 랜딩페이지 내부 이동 경로.
 * 외부 경로는 2026-09-01 비로그인 브라우저에서 존재 여부와 로그인 리디렉션을 확인했다.
 */
export const LINKS = {
  top: "#top",
  about: "#about",
  features: "#features",
  whyTestwell: "#why",

  officialSite: "https://testwell.kr/",
  shop: "https://testwell.kr/shop/sale-goods",
  browseTests: "https://testwell.kr/",
  myTests: "https://testwell.kr/survey/inventory",
  result: "https://testwell.kr/survey/my_status",
  login: "https://testwell.kr/authority/login?next=/",
  questionBank: "https://testwell.kr/q_bank/question",
  testPapers: "https://testwell.kr/q_bank/paper",
  publishApplication: "https://testwell.kr/q_bank/publish_application",
  respondentGroups: "https://testwell.kr/survey/respondent_contact_group",
  officialAbout: "https://testwell.kr/about",
  ahaLabResearch: "https://aha-lab.ajou.ac.kr/",
  terms: "https://testwell.kr/terms",
  privacy: "https://testwell.kr/privacy",
  contact: "https://testwell.kr/customer_inquiry",
} as const;

export type LinkKey = keyof typeof LINKS;
