import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      {/* Background wrapper only for stars */}
      <div className="background-wrapper">
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Foreground content */}
      <div className="content-wrapper">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;
