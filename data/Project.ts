export interface Project {
  id: number;
  title: string;
  skills: string[];
  description: string;
  git?: string;
  link?: string;
  duration: string;
  part: string[];
  role: string;
}

export const ProjectList: Project[] = [
  {
    id: 0,
    title: "Hi Alcohol",
    skills: ["Node.js", "JavaScript", "HTML", "CSS"],
    description:
      "가진 재료로 만들 수 있는 칵테일의 레시피 제공 및 Alcohol lover들을 위한 커뮤니티",
    duration: "2021.11.05~2022.01.24",
    part: ["Frontend", "Server", "Plan"],
    role: `
    술 종류, 제품명, 재료 등을 검색해 해당 키워드가 포함되는 레시피를 조회할 수 있습니다.
    해당 레시피는 모달창으로 상세 조회가 가능합니다.

    홈에서는 결정을 어려워하는 사용자를 위한 랜덤 추천 기능을 제공합니다.

    우리동네 주류매장 기능은 카카오 map API를 사용하여 사용자의 위치 주변의 주류매장을 조회할 수 있습니다.
    위치를 공유하기 싫거나, 다른 위치를 조회하고 싶다면 검색 기능을 통해 원하는 위치를 조회할 수 있습니다.

    배포 후 사용자를 모으기 위해 "나와 어울리는 술 테스트"를 만들었습니다.
    MBTI를 기반으로 술과 관련된 질문으로 각자 어울리는 칵테일을 추천해주는 서비스입니다.
    해당 결과를 공유하면서 사용자를 모으고자 했습니다.
        `,
  },
  {
    id: 1,
    title: "Hi Alcohol v.2",
    skills: ["React", "JavaScript", "SCSS"],
    description:
      "가진 재료로 만들 수 있는 칵테일의 레시피 제공 및 Alcohol lover들을 위한 커뮤니티",
    duration: "2022.06.12~2022.09.25",
    part: ["Frontend", "Plan"],
    git: "https://github.com/HiAlcohol/HiAlcohol_react",
    role: `
    기존에 만들어 운영했던 Hi Alcohol의 리뉴얼 버전입니다.
    기존 프로젝트의 기능을 유지하면서, 기존 프로젝트의 단점을 보완하고, 사용자의 편의성을 높이기 위해 리뉴얼하였습니다.
    React를 도입하며 프론트와 서버를 구분하였습니다.
    관리자 모드를 추가하여 운영이 편리하도록 했습니다.

    술 종류, 제품명, 재료 등을 검색해 해당 키워드가 포함되는 레시피를 조회할 수 있습니다.
    해당 레시피는 모달창으로 상세 조회가 가능합니다.

    홈에서는 결정을 어려워하는 사용자를 위한 랜덤 추천 기능을 제공합니다.

    우리동네 주류매장 기능은 카카오 map API를 사용하여 사용자의 위치 주변의 주류매장을 조회할 수 있습니다.
    위치를 공유하기 싫거나, 다른 위치를 조회하고 싶다면 검색 기능을 통해 원하는 위치를 조회할 수 있습니다.

    건의 게시판을 통해 사용자의 의견을 받을 수 있습니다.

    게시글/댓글 신고 기능을 통해 부적절한 게시글/댓글을 신고할 수 있습니다.
    관리자는 신고된 게시글/댓글을 모아 볼 수 있으며, 신고된 게시글/댓글을 숨기거나 나타내게 할 수 있습니다.

    관리자는 레시피를 수정하거나 추가할 수 있습니다.

    수익을 위한 카카오 adfit 광고를 추가하였습니다.
        `,
  },
  {
    id: 2,
    title: "withParents",
    skills: ["React-native cli", "JavaScript", "StyleSheet"],
    description: "고령층 부모의 헬스케어와 커뮤니케이션을 위한 서비스",
    duration: "2022.11.15~2023.03.30",
    part: ["Frontend", "Plan", "Design", "Lead"],
    git: "https://github.com/GDSC-sswu-A/WithParentsFront",
    role: `
    홈에서 오늘 날짜, 가족 리스트, 오늘 복용할 약, 갤러리의 최신 사진을 조회할 수 있도록 했습니다.

    홈의 설정에 들어가 새로운 가족 생성이 가능하며, 가족 id와 password를 이용해 가족 등록이 가능합니다.
    설정 화면에서 본인의 가족 id, password 조회가 가능해, 다른 가족에게 공유할 수 있습니다.

    Google Maps를 이용해 부모님의 최근 위치를 조회하고자 했습니다.
    또한 부모님의 마지막 접속 시간을 조회해 자녀의 걱정을 덜고자 했습니다.
     
    가족이 함께 공유할 수 있는 공동 캘린더를 만들었습니다.
    react-native-calendars를 사용하여 달력을 조회하고, 가족 공동 일정을 모달창을 통해 조회, 삭제, 작성, 수정이 가능합니다.
        `,
  },
  {
    id: 3,
    title: "Pycon Korea 2023",
    skills: ["React", "Next", "TypeScript", "Stiches", "Eslint+Prettier"],
    description:
      "세계 각국의 파이썬 프로그래밍 언어 커뮤니티에서 주관하는 비영리 컨퍼런스 “파이콘”의 2023 한국 홈페이지",
    duration: "2023.01.26~",
    part: ["Frontend"],
    git: "https://github.com/pythonkr/pyconkr-2023-frontend",
    link: "https://2023.pycon.kr/",
    role: `
        FAQ에서 사용될 Toggle 컴포넌트를 구현했습니다.
        
        파이콘에서 진행되는 세션을 조회할 수 있는 세션 목록 페이지를 구현했습니다.
        `,
  },
  {
    id: 4,
    title: "GDSC SSWU",
    skills: [
      "React",
      "Next",
      "TypeScript",
      "Styled-component",
      "Eslint+Prettier",
    ],
    description:
      "Google Developer Students Club의 성신여자대학교 4기 프로젝트 소개 홈페이지",
    duration: "2023.04.20~2023.05.15",
    part: ["Frontend"],
    git: "https://github.com/alreadynyeong/GDSC-SSWU-PAGE",
    link: "https://alreadynyeong.github.io/GDSC-SSWU-PAGE/",
    role: `
    효율적인 개발을 위해 버튼, 네비게이션 바, 하단의 동아리 정보 등의 컴포넌트를 만들어 사용했습니다.
    
    1인 프로젝트로 진행되어 모든 화면을 구현했습니다.
    이 서비스에서는 홈에서의 기본적인 정보와 동아리 소개, 프로젝트 목록, 팀 별 프로젝트 상세보기를 제공합니다.

    사용자가 모바일 화면으로 볼 것을 고려하여 반응형으로 구현했습니다.
    이때 window.innerWidth를 이용해 Mobile, PC 구분했습니다.

    요즘 트렌드에 맞게 다크모드 역시 추가했습니다.
    버튼을 통해 다크모드/라이트모드 설정이 가능하며, @/styles/Theme.ts 파일에 테마별 색을 설정했습니다.
    ThemeProvider를 사용하여 테마를 적용했습니다.
        `,
  },
  {
    id: 5,
    title: "수정광산",
    skills: ["React-native cli", "TypeScript", "StyleSheet"],
    description: "성신여자대학교 학생들을 위한 자체 커뮤니티 어플",
    duration: "2022.10.13 ~",
    part: ["Frontend"],
    link: "https://play.google.com/store/apps/details?id=com.crystalminefrontend&hl=ko&gl=US",
    role: `
    푸시알림을 받기 위한 iOS 환경에서의 설정을 했습니다.

    구글 AdMob을 사용하기 위해 AdMob 계정을 만들고, 광고를 추가했습니다.

    졸업생의 학교 Gmail 계정이 사용 불가능해져서 졸업생이 재인증을 할 수 없는 문제가 있었습니다. 
    이를 해결하기 위해 졸업생이 second Email을 등록하고 삭제할 수 있도록 구현했습니다.

    사용자들의 편의를 위한 채팅 기능을 추가했습니다.
    채팅 리스트를 조회할 수 있고, 편집 및 정렬이 가능합니다.
    채팅방에서는 채팅을 전송할 수 있고, 갤러리 및 촬영을 통해 이미지를 전송할 수 있도록 했습니다.
    실시간으로 채팅이 가능하며, 상대방이 있었는지의 여부도 확인 가능합니다.
    채팅방에서 상대를 차단하거나 나갈 수 있습니다.
        `,
  },
  {
    id: 6,
    title: "Re:MEMORY",
    skills: ["React-native expo", "TypeScript", "StyleSheet"],
    description:
      "챗GPT가 되찾아준 나의 소중한 기억. 어린 시절 추억의 키워드를 입력해 내 추억을 이미지로 기록하고 기억을 공유하는 서비스",
    duration: "2023.06.11~2023.06.12",
    part: ["Frontend"],
    git: "https://github.com/4th-Neordinary-HACKATHON-Team-A/Web",
    role: `
    expo-linear-gradient를 이용한 그라데이션 버튼과 input 테마를 만들었습니다.

    Stack Navigation을 사용해 화면 이동이 가능합니다.

    OnBoarding 화면에서는 닉네임을 입력받습니다.
    이때 닉네임은 AsyncStorage에 저장했습니다

    채팅 형식의 화면에서 추억을 만들기 위한 정보를 사용자에게 입력 받아 저장했습니다.
    사용자가 입력한 정보는 리스트 형태로 서버에 전달됩니다.
    IOS 환경에서 input 창이 가려지는 문제를 해결하기 위해 Keyboard, KeyboardEvent를 사용했습니다.
    
    추억 이미지 결과 페이지에서는 이미지 저장 기능이 존재합니다.
    이때 react-native-easy-toast를 이용해 토스트 메시지를 생성했습니다.
        `,
  },
  {
    id: 7,
    title: "Green Quset",
    skills: [
      "React",
      "TypeScript",
      "Styled-component",
      "Eslint+Prettier",
      "Recoil",
    ],
    description:
      "여행지에서 미션을 찾아 수행하고 소통하며 나만의 식물을 키우는 서비스",
    duration: "2023.07.03~2023.07.04",
    part: ["Frontend"],
    git: "https://github.com/UMCHackathon/Hackathon_client",
    role: `
        찾은 미션을 확인하고 댓글을 통해 서로의 미션을 볼 수 있습니다.
        해당 프로젝트는 해커톤에서 진행되어 시간이 부족했습니다.
        그래서 Recoil을 사용해 데이터를 보여주는 형식으로 임시 구현했습니다.
        사진과 텍스트가 업로드 가능하며, 사진은 미리보기 기능이 있습니다.

        input과 textarea를 이용해 만든 [미션 추가 페이지]에서 사용자가 직접 미션 추가가 가능합니다.

        모바일 화면에 최적화시키기 위해 메뉴는 햄버거 바를 이용해 접을 수 있도록 구현했습니다.
        해당 메뉴에서 화면 이동이 가능합니다.
        `,
  },
  {
    id: 8,
    title: "Todis",
    skills: ["React", "TypeScript", "Styled-component", "Eslint+Prettier"],
    description:
      "날씨에 맞는 코디 포인트 추천! 귀여운 아바타로 친구와 OOTD도 공유가 가능한 웹사이트",
    duration: "2023.07.12~2023.08.23",
    part: ["Frontend", "Part Leader"],
    git: "https://github.com/Todis-UMC/Todis_web",
    link: "http://todis.s3-website.ap-northeast-2.amazonaws.com/",
    role: `
      EsLint+Prettier를 사용해 코드 스타일을 일관성 있게 유지했습니다.
      Font를 편하게 사용하기 위해 CSSProperties를 사용해 스타일을 정의했습니다.

      Input 컴포넌트를 만들었습니다. 기본적인 text input으로 사용이 가능하며 type으로 password를 줄 경우에는 입력 값을 숨길 수 있는 버튼이 활성화됩니다.
      로그인, 회원가입 등의 화면 구현을 위한 컴포넌트를 만들어 사용했습니다.

      이메일과 비밀번호를 통해 로그인이 가능하며, 로그인 시에는 토큰을 발급받아 localStorage에 저장했습니다.
      구글과 카카오를 통한 로그인도 가능합니다.

      회원가입 시에는 이메일, 비밀번호, 닉네임을 입력받습니다.
      닉네임과 비밀번호는 회원정보 수정 페이지에서 변경이 가능합니다.
      비밀번호를 잊은 사용자를 위한 비밀번호 찾기 페이지도 구현했습니다. 사용자가 입력한 이메일로 임시 비밀번호가 발급됩니다.

      모바일 상태의 사이드 메뉴를 구현했습니다.
      keyframes를 사용해 애니메이션을 추가했습니다.

      모바일 사용자를 위한 반응형 웹을 구현했습니다.
      styled-component에서 @media를 사용해 화면 크기에 따라 스타일을 변경했습니다.
      스타일의 변경이 많은 경우 window.innerWidth를 이용해 만든 컴포넌트를 활용해 화면 크기에 따라 컴포넌트를 렌더링했습니다.

      react-toastify를 사용해 토스트 메시지를 구현했습니다.
      react-spinners를 사용해 로딩 중임을 알려주는 컴포넌트를 구현했습니다.
      `,
  },
  {
    id: 9,
    title: "Landing Page",
    skills: ["React", "TypeScript", "Styled-component", "Eslint+Prettier"],
    description: "Landing Page",
    duration: "2023.08.08~2023.09.08",
    part: ["Frontend"],
    git: "https://github.com/DLenc/Randing",
    role: `
      EsLint+Prettier를 사용해 코드 스타일을 일관성 있게 유지했습니다.
      Font를 편하게 사용하기 위해 CSSProperties를 사용해 스타일을 정의했습니다.
      Color를 편하게 사용하기 위해 Color를 정의한 파일을 만들어 사용했습니다.

      랜딩 페이지의 최상단의 표지를 구현했습니다.
      중간의 배너를 구현했습니다.

      층간 소음이 발생할 정도의 소음이 생기면 알려주는 기능을 소개하는 섹션을 구현했습니다.

      디자인 상 페이지에서 빠지게 되었지만,
      react-you-tube를 사용해 유튜브 영상을 불러오는 기능을 구현했습니다.
      &::-webkit-scrollbar를 이용해 스크롤바의 스타일을 변경했습니다.
      `,
  },
];
