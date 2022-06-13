import { Link, useLocation } from "react-router-dom";
import Images from "../constants/images";

const SideBar = ({ close, links }) => {
   const location = useLocation();
   return (
      <div className="sidebar">
         <img
            src={Images.close}
            alt="close"
            className="sidebar_close"
            onClick={close}
         />
         <div className="sidebar_links">
            {links.map(link => (
               <Link
                  onClick={close}
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
      </div>
   );
};

export default SideBar;
