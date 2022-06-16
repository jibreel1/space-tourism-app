import React, { useState } from "react";
import Data from "../constants/data";

const Crew = () => {
   const [crews] = useState(Data.crew);
   const [value, setvalue] = useState(0);

   const { name, images, role, bio } = crews[value];

   return (
      <div className="space_crew">
         <div className="crew">
            <div className="barlow_text page_header">
               <p>
                  <span>02</span>Meet your Crew
               </p>
            </div>

            <div className="crew_content">
               <div className="crew_img">
                  <img src={images} alt="" />
                  <div className="line" />
               </div>
               <div className="crew_descr">
                  <div className="crew_nav">
                     {crews.map((crew, index) => (
                        <div
                           className={` ${index === value && "active"}`}
                           key={index}
                           onClick={() => setvalue(index)}
                        ></div>
                     ))}
                  </div>
                  <div className="crew_details">
                     <p className="crew_role">{role}</p>
                     <p className="crew_name">{name}</p>
                     <p className="crew_bio barlow_text_sub">{bio}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Crew;
