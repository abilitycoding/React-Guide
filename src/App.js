import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateUseEffect from "../src/Components/useStateUseEffect";
import Home from "./Components/Home";
import ApiTutorial from "./Components/Api-Tutorial";
import Transition from "./Components/CSS Animation Transition/Transition";
import Animation from "./Components/CSS Animation Transition/Animation";
import EventHandling from "./Components/EventHandling/EventHandling";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState-useEffect" element={<UseStateUseEffect />} />
          <Route path="/api" element={<ApiTutorial />} />
          <Route path="/transition" element={<Transition />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/event-handling" element={<EventHandling />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
