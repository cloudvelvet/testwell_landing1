/** 공개 기능 설명과 일반적인 검사 원칙을 구분한 문구. */
export const SITE_CONTENT = {
  shared: { logo: 'TestWell', skip: '본문으로 건너뛰기', homeLabel: 'TestWell 맨 위로', externalNote: '제작 도구를 이용하려면 로그인이 필요합니다.' },
  header: {
    nav: [
      { label: '이용 안내', link: 'about' },
      { label: '내 검사', link: 'myTests' },
      { label: '결과 확인', link: 'result' },
    ],
    login: '로그인', menuOpen: '메뉴 열기', menuClose: '메뉴 닫기', navLabel: '주요 메뉴', mobileLabel: '모바일 메뉴',
  },
  hero: {
    label: '심리검사 · 학습평가',
    title: ['검사를 만드는 일부터,', '참여와 결과 확인까지.'],
    description: 'TestWell은 심리검사와 학습평가를 위한 온라인 플랫폼입니다. 문항과 검사지를 준비하는 제작자, 검사에 응답하고 결과를 확인하는 참여자가 함께 이용합니다.',
    primary: '문항 관리에서 시작',
    note: '검사를 만들려면 로그인 후 질문 관리에서 시작하세요.',
  },
  participant: {
    title: '참여할 검사가 있나요?',
    description: '내 검사 목록으로 바로 이동하세요.',
    action: '내 검사 확인',
    note: '로그인 후 이용할 수 있습니다.',
  },
  capabilities: {
    label: '검사를 만드는 사람을 위한 도구',
    title: '질문을 준비하고,\n검사로 구성합니다.',
    description: '문항과 검사지, 참여할 사람들을 각각 관리합니다. 지금 필요한 작업의 메뉴로 바로 이동할 수 있습니다.',
    figureLabel: 'TestWell 제작 도구의 관계',
    figureCaption: '제작 도구의 관계를 설명한 도식입니다. 실제 기능 화면이나 필수 진행 순서가 아닙니다.',
    relation: '문항을 모아 구성',
    groupRelation: '참여할 사람들을 그룹으로 관리',
    items: [
      { noun: '문항', title: '질문과 문제를 준비합니다.', description: '검사에 사용할 질문이나 학습평가 문제를 작성하고 관리합니다.', action: '질문 관리 열기', link: 'questionBank' },
      { noun: '검사지', title: '문항을 하나의 검사로 모읍니다.', description: '준비한 문항으로 검사지를 구성합니다.', action: '검사지 만들기', link: 'testPapers' },
      { noun: '참여자', title: '참여할 사람들을 관리합니다.', description: '참여자를 그룹으로 관리합니다. 그룹에 설문을 배포하는 기능을 제공합니다.', action: '그룹 관리 열기', link: 'respondentGroups' },
    ],
  },
  measurement: {
    label: '문항을 준비하기 전에',
    title: '이 검사로 무엇을 알고 싶나요?',
    description: '얼마나 자신 있는지 묻는 질문과, 무엇을 알고 있는지 확인하는 문제는 다릅니다. 알아보려는 내용을 먼저 정하고, 그에 맞는 문항과 결과 해석의 기준을 함께 준비하세요.',
  },
  finalCta: {
    label: '다음으로', title: '목적에 맞는 곳으로 이어집니다.',
    links: [
      { title: '검사를 찾고 싶다면', action: '공식 서비스에서 둘러보기', link: 'browseTests' },
      { title: '이용 방법이 궁금하다면', action: 'TestWell에 문의하기', link: 'contact' },
    ],
  },
  footer: {
    tagline: '온라인 검사 제작 · 참여 · 결과 확인',
    navLabel: '서비스 정보',
    links: [
      { label: '공식 소개', link: 'officialAbout' },
      { label: '이용약관', link: 'terms' },
      { label: '개인정보처리방침', link: 'privacy' },
    ],
    copyright: 'TestWell. 모든 권리 보유.',
  },
} as const;
