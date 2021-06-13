import React from "react";
import './App.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>
      <footer>
        Projected created by <strong>Natalia Guardia</strong> and is {" "}
        <a href="https://www.github.com/natelba/final-weather-react" target="_blank" rel="noreferrer">
        Open-Sourced
        </a>.
      </footer>
    </div>
  </div>
  );
}