import { useState } from "react";
import Images from "../constants/images";
import SideBar from "./SideBar";

const Navbar = () => {
   const [showSidebar, setShowSidebar] = useState(false);

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
               <a className="barlow_text active">
                  <span>00</span>home
               </a>
               <a className="barlow_text">
                  <span>01</span>destination
               </a>
               <a className="barlow_text">
                  <span>02</span>crew
               </a>
               <a className="barlow_text">
                  <span>03</span>technology
               </a>
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
         {showSidebar && <SideBar close={closeSideBar} />}
      </>
   );
};

export default Navbar;
