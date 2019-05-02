import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BasicButton from "./components/BasicButton";
import ButtonWithProps from "./components/ButtonWithProps";
import ButtonWithAttribute from "./components/ButtonWithAttribute";
import ContainerSamples from "./components/ContainerSamples";
import FlexSample from "./components/FlexSample";
import ButtonSamples from "./components/ButtonSamples";
import CardSamples from "./components/CardSamples";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicButton />
        <ButtonWithProps />
        <div>
          <ButtonWithAttribute>Button with attr 1</ButtonWithAttribute>
          <ButtonWithAttribute secondary>
            Button with attr 2
          </ButtonWithAttribute>
          <ButtonWithAttribute inverse big>
            Button with attr 3
          </ButtonWithAttribute>
          <ContainerSamples />
          <FlexSample />
          <ButtonSamples />
          <CardSamples />
        </div>
      </header>
    </div>
  );
}

export default App;
