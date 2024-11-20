import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icons: <IoIcons.IoIosPerson />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icons: <AiIcons.AiOutlineProject />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icons: <FaIcons.FaEnvelope />,
    cName: "nav-text",
  },
];
