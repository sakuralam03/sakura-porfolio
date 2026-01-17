import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WebDevelopment from "./pages/webdevelopment";
import GameDevelopment from "./pages/GameDevelopment";

const App = () => {
  return (
    <Router>
      <div className="background-wrapper">
        <div className="stars"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="shooting-star"></div>
        ))}
      </div>

      <div className="content-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/gamedevelopment" element={<GameDevelopment />} />

      
        </Routes>
      </div>
    </Router>
  );
};

export default App;
