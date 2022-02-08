import React from "react";
import About from "./Pages/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Hero} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
