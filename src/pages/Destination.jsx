import React, { useState } from "react";
import Data from "../constants/data";

const Destination = () => {
   const [planets] = useState(Data.destinations);
   const [value, setvalue] = useState(0);

   const { name, images, description, distance, travel } = planets[value];
   return (
      <div className="space_destination">
         <div className="destination">
            <div className="barlow_text destination_header">
               <p>
                  <span>01</span>Pick your destination
               </p>
            </div>
            <div className="destination_flex">
               <div className="destination_image">
                  <img src={images} alt="" />
               </div>
               <div className="destination_flex_2">
                  <div className="destination_links">
                     {planets.map((planet, index) => (
                        <p
                           className={`barlow_text ${
                              index === value && "active"
                           }`}
                           key={index}
                           onClick={() => setvalue(index)}
                        >
                           {planet.name}
                        </p>
                     ))}
                  </div>
                  <div className="destination_location">
                     <h1>{name}</h1>
                     <p className="barlow_text_sub">{description}</p>
                  </div>
                  <div className="line" />
                  <div className="dist_travel">
                     <div className="destination_average">
                        <p className="barlow_text">Avg. Distance</p>
                        <p className="dist">{distance}</p>
                     </div>
                     <div className="destination_average">
                        <p className="barlow_text">Est. Travel Time</p>
                        <p className="dist">{travel}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Destination;
