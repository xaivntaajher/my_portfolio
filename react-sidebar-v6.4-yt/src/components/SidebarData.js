import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

// export const SidebarData = [
//   {
//     title: "Home",
//     path: "/",
//     icons: <AiIcons.AiFillHome />,
//     cName: "nav-text",
//   },
//   {
//     title: "About",
//     path: "/about",
//     icons: <IoIcons.IoIosPerson />,
//     cName: "nav-text",
//   },
//   {
//     title: "Projects",
//     path: "/projects",
//     icons: <AiIcons.AiOutlineProject />,
//     cName: "nav-text",
//     submenu: [
//       {
//         title: "Let Track",
//         path: "/projects/web-development",
//         icons: <AiIcons.AiOutlineCode />,
//       },
//       {
//         title: "Book Nook",
//         path: "/projects/machine-learning",
//         icons: <AiIcons.AiOutlineRobot />,
//       },
//       {
//         title: "Music Library",
//         path: "/projects/mobile-apps",
//         icons: <AiIcons.AiOutlineMobile />,
//       },
//       {
//         title: "Robot VS Dinosuar",
//         path: "/projects/mobile-apps",
//         icons: <AiIcons.AiOutlineMobile />,
//       },
//       {
//         title: "Rock, Paper, Scissor, Lizard & Spock",
//         path: "/projects/mobile-apps",
//         icons: <AiIcons.AiOutlineMobile />,
//       },
//     ],
//   },
//   {
//     title: "Contact",
//     path: "/contact",
//     icons: <FaIcons.FaEnvelope />,
//     cName: "nav-text",
//   },
// ];

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaIcons.FaTasks />, // Icon for Projects
    cName: "nav-text",
    submenu: [
      {
        title: "Project 1",
        path: "/ProjectDetail/projectDetail1", // Link to individual project page
        icon: <FaIcons.FaProjectDiagram />,
      },
      {
        title: "Project 2",
        path: "/ProjectDetail/projectDetail2", // Link to individual project page
        icon: <FaIcons.FaProjectDiagram />,
      },
      // Add more projects as needed
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelope />,
    cName: "nav-text",
  },
];

export default SidebarData;
