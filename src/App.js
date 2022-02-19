import React from "react";
// import { Component } from 'react';
// import MediaQuery from 'react-responsive';
import "./App.css";
import AboutMe from "./components/Starter/AboutMe";
import Starter from "./components/Starter/Starter";

function App() {
  return (
    <div className="App" style={App.css}>
      <Starter></Starter>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
