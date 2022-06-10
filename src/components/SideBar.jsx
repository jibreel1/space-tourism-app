import Images from "../constants/images";

const SideBar = ({ close }) => {
   return (
      <div className="sidebar">
         <img
            src={Images.close}
            alt="close"
            className="sidebar_close"
            onClick={close}
         />
         <div className="sidebar_links">
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
      </div>
   );
};

export default SideBar;
