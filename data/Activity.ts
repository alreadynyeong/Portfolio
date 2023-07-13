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
  project: string;
  projectNum: number;
}

export const ActivityList: Activity[] = [
  {
    id: 0,
    title: "GDSC SSWU 4th",
    date: "2022.09~2023.06",
    role: "교육팀 팀장",
    content: [
      {
        id: 0,
        text: "GDSC SSWU 4기 홈페이지 제작",
        project: "GDSC SSWU",
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
  {
    id: 1,
    title: "Pycon Korea 2023",
    date: "2023.01~2023.07",
    role: "FE 개발 자원봉사자",
    content: [
      {
        id: 0,
        project: "Pycon Korea 2023",
        projectNum: 3,
      },
    ],
  },
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
    title: "UMC 4th SSWU",
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
    ],
  },
];
