export interface Route {
  path: string;
  title: string;
}

export const Routes: { [key: string]: Route } = {
  GIT: {
    path: "https://github.com/alreadynyeong",
    title: "GitHub",
  },
  MAIL: {
    path: "mailto:already.nyeong@gmail.com",
    title: "Mail",
  },
  Notion: {
    path: "https://www.notion.so/already-nyeong/Portfolio-debebb65bcf2427f87f58d0acba63de6?pvs=4",
    title: "Notion",
  },
};

export const ContactData = [Routes.GIT, Routes.MAIL, Routes.Notion];
