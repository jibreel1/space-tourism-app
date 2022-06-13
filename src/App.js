import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App = () => {
   return (
      <Router>
         <div className="space_home">
            <Navbar />
            <Routes>
               <Route path="/" element={<Hero />} />
               <Route path="destination" element={<Destination />} />
               <Route path="crew" element={<Crew />} />
               <Route path="technology" element={<Technology />} />
            </Routes>
         </div>
      </Router>
   );
};

export default App;
