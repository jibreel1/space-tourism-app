import React, { useState } from "react";
import Data from "../constants/data";

const Technology = () => {
   const [techs] = useState(Data.technology);
   const [value, setvalue] = useState(0);

   const { name, images, description } = techs[value];

   return (
      <div className="space_tech">
         <div className="tech">
            <div className="barlow_text page_header tech_header">
               <p>
                  <span>03</span>Space Launch 101
               </p>
            </div>
            <div className="tech_content">
               <div className="tech_img">
                  <img src={images.landscape} alt="" className="img_1" />
                  <img src={images.portrait} alt="" className="img_2" />
               </div>
               <div className="tech_descr">
                  <div className="tech_nav">
                     {techs.map((tech, index) => (
                        <div
                           className={` ${index === value && "active"}`}
                           key={index}
                           onClick={() => setvalue(index)}
                        >
                           {tech.id}
                        </div>
                     ))}
                  </div>
                  <div className="tech_info">
                     <p className="tech_sub-info">The Terminology...</p>
                     <p className="tech_name">{name}</p>
                     <p className="tech_bio barlow_text_sub">{description}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Technology;
