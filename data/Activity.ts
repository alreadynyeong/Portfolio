export interface Activity {
  id: number;
  title: string;
  date: string;
  role: string;
  content: Content[];
}

interface Content {
  id: number;
  text?: string;
  project?: string;
  projectNum?: number;
}

export const ActivityList: Activity[] = [
  {
    id: 0,
    // title: "GDSC SSWU 4th",
    title: "GDSC 4th",
    date: "2022.09~2023.06",
    role: "교육팀 팀장",
    content: [
      {
        id: 0,
        // text: "GDSC SSWU 4기 홈페이지 제작",
        // project: "GDSC SSWU",
        text: "GDSC 4기 교내 홈페이지 제작",
        project: "GDSC PAGE",
        projectNum: 4,
      },
      {
        id: 1,
        text: "Google Solution Challenge 참가",
        project: "withParents",
        projectNum: 2,
      },
    ],
  },
  // {
  //   id: 1,
  //   title: "Pycon Korea 2023",
  //   date: "2023.01~2023.07",
  //   role: "FE 개발 자원봉사자",
  //   content: [
  //     {
  //       id: 0,
  //       project: "Pycon Korea 2023",
  //       projectNum: 3,
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "수정광산 SaltyLab 1기",
    date: "2022.10~2023.10",
    role: "Frontend 개발팀",
    content: [
      {
        id: 0,
        project: "수정광산",
        projectNum: 5,
      },
    ],
  },
  {
    id: 3,
    title: "UMC 4th",
    date: "2023.03~",
    role: "Member",
    content: [
      {
        id: 0,
        text: "4회 NE(O)RDINARY 해커톤 우수상",
        project: "Re:MEMORY",
        projectNum: 6,
      },
      {
        id: 1,
        text: "4회 UMC 해커톤 우수상",
        project: "Green Quest",
        projectNum: 7,
      },
      {
        id: 2,
        text: "프로젝트 참여",
        project: "Todis",
        projectNum: 8,
      },
    ],
  },
  {
    id: 4,
    title: "DLenc 층간소음 프로젝트",
    date: "2023.08~2023.09",
    role: "Frontend 개발자",
    content: [
      {
        id: 0,
        text: "대전 연구소 층간 소음 견학",
      },

      {
        id: 1,
        text: "NE(O)RDINARY 데모데이 부스 참여",
      },
      {
        id: 2,
        text: "KPRA 컨텐츠 기반 랜딩페이지 제작",
        project: "Landing Page",
        projectNum: 9,
      },
    ],
  },
];
