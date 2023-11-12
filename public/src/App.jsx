import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
