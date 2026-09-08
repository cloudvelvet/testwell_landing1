/** 2026-09-08 공개 경로와 로그인 리디렉션 확인. 상세: docs/CLAIMS_AND_LINKS_AUDIT.md */
export const LINKS = {
  top: '#top',
  about: '#about',
  officialSite: 'https://testwell.kr/',
  browseTests: 'https://testwell.kr/',
  myTests: 'https://testwell.kr/survey/inventory',
  result: 'https://testwell.kr/survey/my_status',
  login: 'https://testwell.kr/authority/login?next=/',
  questionBank: 'https://testwell.kr/q_bank/question',
  testPapers: 'https://testwell.kr/q_bank/paper',
  respondentGroups: 'https://testwell.kr/survey/respondent_contact_group',
  officialAbout: 'https://testwell.kr/about',
  terms: 'https://testwell.kr/terms',
  privacy: 'https://testwell.kr/privacy',
  contact: 'https://testwell.kr/customer_inquiry',
} as const;
export type LinkKey = keyof typeof LINKS;
