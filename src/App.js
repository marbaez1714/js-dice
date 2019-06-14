import React from "react";
import Dice from "./components/Dice";
import DiceTray from "./components/DiceTray";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> JSDice! </p>
      </header>
      <DiceTray />
    </div>
  );
}

export default App;
