import Images from "../../constants/images";

const Navbar = () => {
   return (
      <div className="navbar">
         <div>
            <img src={Images.logo} alt="" />
         </div>
         <div className="navbar_line"></div>
         <ul className="navbar_links barlow-text">
            <li>
               <span>00</span>home
            </li>
            <li>
               <span>01</span>destination
            </li>
            <li>
               <span>02</span>crew
            </li>
            <li>
               <span>03</span>technology
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
