import React from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./Pages/About";
import Pullout from "./components/pullout/Pullout";

function App() {
  return (
    <div>
      {/* <Pullout /> */}
      <Navbar />
      <Hero />
      <Home />
      {/* <Footer /> */}
      {/* <About /> */}
    </div>
  );
}

export default App;
