import Images from "../constants/images";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div>
            <img src={Images.logo} alt="" />
         </div>
         <div className="navbar_line"></div>
         <ul className="navbar_links">
            <li className="barlow_text">
               <span>00</span>home
            </li>
            <li className="barlow_text">
               <span>01</span>destination
            </li>
            <li className="barlow_text">
               <span>02</span>crew
            </li>
            <li className="barlow_text">
               <span>03</span>technology
            </li>
         </ul>
         <img src={Images.hamburger} alt="menu" className="navbar_ham" />
      </nav>
   );
};

export default Navbar;
