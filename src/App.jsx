import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RefSystem from "./pages/RefSystem";
import Partner from "./pages/Partner";
import About from "./pages/About";
import Academy from "./pages/Academy";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="navbar-containter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refsystem" element={<RefSystem />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/about" element={<About />} />
          <Route path="/academy" element={<Academy />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
