import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Todos";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <Todos />
    </div>
  );
}

export default App;
