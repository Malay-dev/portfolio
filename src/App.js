import React from "react";
// import { Component } from 'react';
// import MediaQuery from 'react-responsive';
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/MySkills";
import Starter from "./components/Starter";
import Footer from "./components/Footer";
function App() {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  return (
    <div className="App" style={App.css}>
      <Starter></Starter>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <MyProjects></MyProjects>

      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
