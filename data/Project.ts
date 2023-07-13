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
        • 칵테일 검색 결과 및 해당 레시피 조회
            - 술 종류, 제품명, 재료 등을 검색했을 때 해당 키워드가 포함되는 칵테일을 리스트로 출력
            - 해당 칵테일의 레시피 조회

        • 칵테일 랜덤 추천 조회
            - 저장된 칵테일 중 랜덤으로 추천해주는 기능

        • 우리동네 주류매장
            - 카카오 map API 사용
            - 검색한 위치 주변의 주류매장 위치, 간단한 정보 제공
            - 검색 키워드가 없을 경우 현재 위치 주변의 주류매장 정보 제공

        • 칵테일 랜덤 추천 조회
            - 저장된 칵테일 중 랜덤으로 추천해주는 기능

        • 나와 어울리는 술 테스트 frontend
            - mbti를 기반으로 술과 관련된 질문으로 각자 어울리는 칵테일을 추천해주는 서비스
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
        • 칵테일 검색 결과 및 해당 레시피 조회
            - 술 종류, 제품명, 재료 등을 검색했을 때 해당 키워드가 포함되는 칵테일을 리스트로 출력
            - 해당 칵테일의 레시피를 모달창으로 조회

        • 칵테일 랜덤 추천 조회
            - 저장된 칵테일 중 랜덤으로 추천해주는 기능

        • 우리동네 주류매장
            - 카카오 map API 사용
            - 검색한 위치 주변의 주류매장 위치, 간단한 정보 제공
            - 검색 키워드가 없을 경우 현재 위치 주변의 주류매장 정보 제공

        • 건의 게시판 CRUD
            - 사용자의 의견을 받기 위한 건의 게시판 구현

        • 게시글/댓글 신고 기능
            - 게시글/댓글 신고
            - (관리자 기능) 신고된 게시글과 신고된 댓글이 포함된 게시글 모아보기
            - (관리자 기능) 신고된 글 또는 댓글을 숨기거나 나타내게 하는 기능

        • (관리자 기능)레시피 수정, 추가
            - 존재하는 레시피의 재료, 설명, 비율 등을 수정
            - 존재하지 않는 칵테일 레시피 추가

        • 카카오 adfit 광고 추가
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
        • 홈
            - 오늘 날짜 조회
            - 가족 리스트 조회
            - 오늘 복용할 약 조회
            - 갤러리 기능 최신 사진 조회

        • 설정
            - 새로운 가족 생성
            - 가족 id와 password를 이용해 가족 등록

        • 위치 및 접속 시간
            - google maps를 이용해 부모님의 최근 위치 조회
            - 부모님의 마지막 접속 시간 조회

        • 가족 캘린더
            - react-native-calendars를 사용하여 달력 조회
            - 가족 공동 일정 모달창을 통한 조회
            - 가족 공동 일정 삭제/작성/수정
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
        • 컴포넌트
            - Toggle 컴포넌트 구현
        
        • 세션 관리 기능
            - 세션 목록 리스트
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
        • 컴포넌트
            - 버튼 컴포넌트
            - 상단 네비게이션 바
            - 하단 동아리 정보

        • 화면 구현
            - 홈
            - 동아리 소개 페이지
            - 프로젝트 목록 페이지
            - 팀 별 프로젝트 상세보기

        • 반응형 적용
            - window.innerWidth를 이용해 Mobile, PC 구분

        • 다크모드 구현
            - 버튼을 통한 다크모드/라이트모드 설정
            - @/styles/Theme.ts 파일에 테마별 색 설정
            - ThemeProvider 사용
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
        • 푸시알림
            - iOS 푸시알림 설정

        • 광고
            - 구글 AdMob을 사용한 광고 추가

        • 졸업생 재인증
            - Gmail이 사라져서 재인증이 불가능한 졸업생을 위한 second Email 등록, 삭제 구현

        • 쪽지
            - 쪽지 리스트 조회 화면 구현
            - 쪽지 리스트 편집 및 정렬 화면 구현
            - 채팅 창 화면 구현 및 조회
            - 갤러리 및 촬영을 통한 이미지 전송
            - 쪽지방 차단, 나가기
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
        • 컴포넌트
            - expo-linear-gradient를 이용한 그라데이션 버튼
            - 사용자, 시스템 질문, 시스템 선택 말풍선

        • 화면 이동
            - Stack Navigation을 사용한 화면이동

        • OnBoarding 화면
            - 닉네임을 입력받아 AsyncStorage에 저장
            - expo-linear-gradient를 이용한 그라데이션 input 테마

        • 채팅 화면
            - 이미지를 만들기 위한 정보를 사용자에게 입력 받아 저장
            - react-native의 Keyboard, KeyboardEvent를 이용해서 텍스트 입력시 input창을 볼 수 있도록 수정

        • 추억 이미지 결과 페이지
            - react-native-easy-toast를 이용한 토스트 메시지 생성
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
        • 미션 페이지
            - 미션 조회
            - 댓글 리스트 조회
            - recoil을 이용한 데이터 추가, 삭제
            - 사진 업로드

        • 미션 추가 페이지
            - input, textarea를 이용한 텍스트 입력창

        • 헤더
            - 햄버거 바를 눌러 메뉴 조회 및 페이지 이동

        • 컴포넌트
            - 버튼 컴포넌트
            
        • 환경설정
            - EsLint+Prettier 설정
        `,
  },
];
