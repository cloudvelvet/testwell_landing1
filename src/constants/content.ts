/**
 * 공개 서비스 메뉴에 맞춘 TestWell 랜딩페이지 문구.
 */
export const SITE_CONTENT = {
  header: {
    logoText: 'TESTWELL',
    nav: ['기능 소개', '내 검사'],
    resultButton: '결과 확인',
    loginButton: '로그인',
    ctaButton: '검사 만들기',
  },
  hero: {
    categoryBadge: 'TestWell 온라인 검사 서비스',
    mainHeadingLine1: '온라인 검사를',
    mainHeadingLine2: '만들고 운영하세요.',
    subHeading:
      '설문이나 학습평가에 쓸 질문을 직접 작성해 온라인 검사지를 만듭니다. 참여자는 TestWell에서 검사에 응답하고 결과를 확인할 수 있습니다.',
    primaryCta: '검사 만들기',
    creationNote: '로그인 후 질문 관리에서 시작하세요.',
    participantTitle: '검사 참여자 바로가기',
    participantNote: '로그인 후 이용할 수 있습니다.',
    myTests: '내 검사',
    myTestsDescription: '내 검사 목록으로 이동',
    result: '결과 확인',
    resultDescription: '참여한 검사의 결과 확인',
  },
  whatIsTestWell: {
    sectionTag: 'TestWell 활용 안내',
    mainHeadline: '설문을 진행하고 학습평가에 활용하세요.',
    description: '질문을 모아 검사지를 구성하고, 검사에 참여할 사람들을 그룹으로 관리합니다.',
    features: [
      {
        title: '질문 작성',
        description: '설문에서 묻고 싶은 내용이나 학습평가에 쓸 문제를 직접 작성합니다.',
        action: '질문 관리 열기',
      },
      {
        title: '검사지 구성',
        description: '질문을 모아 하나의 검사지로 구성합니다. 학습평가에서는 문제에 점수를 매겨 결과를 보여줄 수 있습니다.',
        action: '검사지 만들기',
      },
      {
        title: '참여자 관리',
        description: '검사에 참여할 사람들을 그룹으로 묶어 관리합니다. 등록한 그룹에 설문을 실시할 수 있습니다.',
        action: '그룹 관리 열기',
      },
    ],
    resultContext: {
      label: '검사 결과 이해하기',
      title: '점수와 함께 살펴볼 것',
      explanation: '무엇을 알아보는 검사인지, 어떤 기준으로 점수를 해석하는지 함께 살펴보세요.',
      interpretation: '점수의 의미는 검사의 목적과 해석 기준에 따라 달라집니다. 결과를 비교하거나 판단에 활용할 때는 그 해석을 뒷받침하는 근거도 확인해 주세요.',
    },
  },
  finalCta: {
    tag: '검사 제작 및 이용',
    headline: '질문 작성부터 시작해 보세요.',
    description: '서비스 이용에 궁금한 점은 문의해 주세요.',
    primaryBtn: '검사 만들기',
    secondaryBtn: '이용 문의',
  },
  footer: {
    logoText: 'TESTWELL',
    tagline: '온라인 검사 제작 및 관리',
    nav: ['TestWell 공식 소개', '이용약관', '개인정보처리방침', '문의하기'],
    copyright: 'TestWell 온라인 검사 서비스',
  },
} as const;
