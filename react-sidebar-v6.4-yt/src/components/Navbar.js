// import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
// import "../App.css";
// import { IconContext } from "react-icons";

// function Navbar() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: "undefined" }}>
//         <div className="navbar">
//           <Link to="#" className="menu-bar">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//           <ul className="nav-menu-items" onClick={showSidebar}>
//             <li className="navbar-toggle">
//               <Link to="#" className="menu-bars">
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidebarData from "./SidebarData"; // SidebarData includes projects submenu
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const showSidebar = () => setSidebar(!sidebar);

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <IconContext.Provider value={{ color: "undefined" }}>
      {/* Navbar at the top */}
      <div className="navbar">
        <Link to="#" className="menu-bar">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h1 className="navbar-title">My App</h1>
      </div>

      {/* Sidebar */}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              {item.submenu ? (
                <>
                  {/* Main Projects item with submenu toggle */}
                  <div
                    className="menu-item-with-submenu"
                    onClick={() => toggleSubmenu(index)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                    <AiIcons.AiOutlineDown
                      style={{
                        marginLeft: "auto",
                        transform: submenuOpen[index]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                    />
                  </div>

                  {/* Submenu */}
                  {submenuOpen[index] && (
                    <ul className="submenu">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="submenu-item">
                          <Link to={subItem.path}>
                            {subItem.icon}
                            <span>{subItem.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item.path} onClick={showSidebar}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
