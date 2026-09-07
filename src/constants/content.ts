/** 공개 서비스 메뉴에 맞춘 기본 문구. */
export const SITE_CONTENT = {
  header: {
    logoText: 'TESTWELL',
    nav: ['그룹관리', '문제은행', '상점'],
    resultButton: '결과 확인',
    loginButton: '로그인',
    ctaButton: '검사 찾기',
  },
  hero: {
    categoryBadge: '심리검사 · 학습평가를 위한 온라인 도구',
    mainHeadingLine1: '문항부터 검사 운영까지,',
    mainHeadingLine2: '한곳에서 관리하세요.',
    descriptionLine1: '문항과 검사지를 준비하고 응답자 그룹을 관리하세요.',
    descriptionLine2: '참여자는 온라인으로 검사에 응답하고 결과를 확인할 수 있습니다.',
    primaryCta: '검사 만들기',
    secondaryCta: '참여할 검사 찾기',
  },
  footer: {
    logoText: 'TESTWELL',
    tagline: '검사를 만들고 운영하고 참여할 수 있는 온라인 검사 서비스',
    nav: ['TestWell 공식 소개', '이용약관', '개인정보처리방침', '문의하기'],
    copyright: '온라인 검사 · 평가',
  },
} as const;
