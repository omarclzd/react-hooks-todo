import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hooks Todo</h1>
      <Form />
    </div>
  );
}

export default App;
