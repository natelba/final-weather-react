import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1> Weather App </h1>
      <Weather />
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