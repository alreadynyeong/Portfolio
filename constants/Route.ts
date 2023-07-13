export interface Route {
  path: string;
  title: string;
}

export const Routes: { [key: string]: Route } = {
  HOME: {
    path: "/",
    title: "Home",
  },
  CONTACT: {
    path: "/contact",
    title: "Contact",
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
  Routes.CONTACT,
  Routes.ACTIVITY,
  Routes.PROJECT,
];
