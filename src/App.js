import "./App.css";
import Hero from "./Hero/Hero.js";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
      <About />
    </div>
  );
}

export default App;
