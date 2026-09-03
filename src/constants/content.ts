/**
 * TestWell 랜딩페이지 문구 설정.
 * 현재 기능은 공개 서비스의 실제 메뉴와 경로로 확인한 범위만 서술한다.
 * 척도화·타당화 등은 제품의 현재 기능이 아니라 검사·평가의 지향 원칙으로 구분한다.
 */
export const SITE_CONTENT = {
  header: {
    logoText: "TESTWELL",
    nav: ["그룹관리", "문제은행", "상점"],
    resultButton: "결과 확인",
    loginButton: "로그인",
    ctaButton: "검사 찾기",
  },

  hero: {
    categoryBadge: "온라인 검사·평가 플랫폼",
    mainHeadingLine1: "검사를 만들고, 응답을 받고,",
    mainHeadingLine2: "결과를 확인하는 모든 과정을 한곳에서.",
    subHeading: "검사 제작자는 문항·검사지·응답자 그룹을 관리하고, 참여자는 검사를 실시한 뒤 결과를 확인할 수 있습니다.",
    primaryCta: "참여할 검사 찾기",
    secondaryCta: "내 결과 확인하기",
  },

  whatIsTestWell: {
    sectionTag: "무엇을 하러 오셨나요",
    mainHeadlineLine1: "검사를 찾고 결과를 확인하거나,",
    mainHeadlineLine2: "직접 만들어 운영할 수 있습니다.",
    description: "지금 하려는 일에 맞는 화면을 고르면 바로 시작할 수 있습니다.",
    paths: [
      {
        tag: "01 / 검사 참여자",
        title: "검사에 참여하기",
        desc: "참여할 검사를 찾거나 안내받은 검사를 온라인으로 실시합니다.",
        actionLabel: "참여할 검사 찾기",
      },
      {
        tag: "02 / 결과 확인",
        title: "진행 상태와 결과 확인하기",
        desc: "이미 참여한 검사의 진행 상태와 결과 확인 화면으로 바로 이동합니다.",
        actionLabel: "내 결과 확인하기",
      },
      {
        tag: "03 / 제작 · 운영",
        title: "검사를 만들고 운영하기",
        desc: "문항과 검사지를 구성하고 응답자 그룹을 관리하며 검사 운영을 시작합니다.",
        actionLabel: "검사 만들기 시작",
      },
    ],
  },

  whyTestWell: {
    sectionTag: "만든 배경",
    headlineLine1: "검사를 더 쉽게",
    headlineLine2: "시작할 수 있도록.",
    introduction: "검사에 참여하는 사람과 만드는 사람 모두, 복잡한 과정 앞에서 멈추지 않도록 만들었습니다.",
    note: "계량심리를 공부하며, 검사는 어렵게 설명하기보다 필요한 사람이 쉽게 시작할 수 있어야 한다고 생각했습니다.",
  },

  finalCta: {
    tag: "TestWell 바로가기",
    headlineLine1: "무엇을 하려는지 고르고,",
    headlineLine2: "바로 시작하세요.",
    subText: "검사를 찾아 참여하거나, 내 결과를 확인하거나, 직접 검사를 만들 수 있습니다.",
    primaryBtn: "참여할 검사 찾기",
    secondaryBtn: "내 결과 확인하기",
    tertiaryBtn: "검사 만들기 시작",
  },

  footer: {
    logoText: "TESTWELL",
    tagline: "검사를 만들고 운영하고 참여할 수 있는 온라인 검사 서비스",
    nav: ["TestWell 공식 소개", "이용약관", "개인정보처리방침", "문의하기"],
    copyright: "검사를 만들고 운영하고 참여할 수 있는 온라인 검사 서비스",
  },
} as const;
