import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Vision",
    path: "/vision",
    newTab: false,
  },
  {
    id: 4,
    title: "People",
    path: "/team",
    newTab: false,
  },
  {
    id: 10,
    title: "Clients",
    path: "/client",
    newTab: false,
  },
  {
    id: 5,
    title: "Awards",
    path: "/awards",
    newTab: false,
  },
  {
    id: 6,
    title: "Work",
    newTab: false,
    submenu: [
      {
        id: 111,
        title: "Print Media",
        path: "/print",
        newTab: false,
      },
      {
        id: 112,
        title: "Digital Media",
        path: "/digital",
        newTab: false,
      },
      {
        id: 113,
        title: "TV commercial & Documentaries",
        path: "/tv",
        newTab: false,
      },
      {
        id: 114,
        title: "Exhibitions",
        path: "/exhibition",
        newTab: false,
      },
      {
        id: 115,
        title: "Audio",
        path: "/audio",
        newTab: false,
      },

    ],
  },

  {
    id: 7,
    title: "Careers",
    path: "/Careers",
    newTab: false,
  },
  {
    id: 8,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 9,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },


];

export default menuData;
