import React from "react";
import "./App.css";
import Stackex from "./Components/Stackex";
import SearchAppBar from "./Components/SearchAppBar";
import CurrentActionBar from "./Components/CurrentActionBar";
function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <CurrentActionBar currentAction="Questions" />
      <Stackex />
    </div>
  );
}

export default App;
