export interface Route {
  path: string;
  title: string;
}

export const Routes: { [key: string]: Route } = {
  HOME: {
    path: "/",
    title: "Home",
  },
  ABOUT: {
    path: "/about",
    title: "About",
  },
  ACTIVITY: {
    path: "/activity",
    title: "Activity",
  },
  PROJECT: {
    path: "/projects",
    title: "Projects",
  },
};

export const NavMenu = [
  Routes.HOME,
  Routes.ABOUT,
  Routes.ACTIVITY,
  Routes.PROJECT,
];
