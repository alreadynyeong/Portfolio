export interface Award {
  id: number;
  title: string;
  date: string;
  rank: string;
  role: string;
  project: string;
  projectNum: number;
}

export const AwardList: Award[] = [
  {
    id: 0,
    // title: "2022 SSWU 소프트웨어 경진대회",
    title: "2022 교내 소프트웨어 경진대회",
    date: "2022.09.15",
    rank: "은상",
    role: "기획/Frontend 개발",
    project: "Hi Alcohol v.2",
    projectNum: 1,
  },
  {
    id: 1,
    title: "제 4회 NE(O)RDINARY 해커톤",
    date: "2023.06.11",
    rank: "우수상",
    role: "Frontend 개발",
    project: "Re:MEMORY",
    projectNum: 6,
  },
  {
    id: 2,
    title: "제 4회 UMC 해커톤",
    date: "2023.07.04",
    rank: "최우수상",
    role: "Frontend 개발",
    project: "Green Quest",
    projectNum: 7,
  },
];
