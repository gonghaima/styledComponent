import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicButton from "./components/BasicButton";
import ButtonWithProps from "./components/ButtonWithProps";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicButton />
        <ButtonWithProps />
      </header>
    </div>
  );
}

export default App;
