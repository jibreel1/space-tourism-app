import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Images from "../constants/images";
import SideBar from "./SideBar";

const Navbar = () => {
   const location = useLocation();
   const [showSidebar, setShowSidebar] = useState(false);

   const links = [
      {
         id: "00",
         name: "Home",
         path: "/",
      },
      {
         id: "01",
         name: "Destination",
         path: "/destination",
      },
      {
         id: "02",
         name: "Crew",
         path: "/crew",
      },
      {
         id: "03",
         name: "Technology",
         path: "/technology",
      },
   ];

   const closeSideBar = () => {
      setShowSidebar(false);
   };
   return (
      <>
         <nav className="navbar">
            <div>
               <img src={Images.logo} alt="" />
            </div>
            <div className="navbar_line"></div>
            <div className="navbar_links">
               {links.map(link => (
                  <Link
                     className={
                        location.pathname === link.path
                           ? "barlow_text active"
                           : "barlow_text"
                     }
                     to={link.path}
                     key={link.id}
                  >
                     <span>{link.id}</span>
                     {link.name}
                  </Link>
               ))}
            </div>
            <div
               className="navbar_ham"
               onClick={() => {
                  setShowSidebar(!showSidebar);
               }}
            >
               <img src={Images.hamburger} alt="menu" />
            </div>
         </nav>
         {showSidebar && <SideBar close={closeSideBar} links={links} />}
      </>
   );
};

export default Navbar;
