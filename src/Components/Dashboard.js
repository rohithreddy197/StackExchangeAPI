import React from "react";
import Stackex from "./Stackex";
import SearchAppBar from "./SearchAppBar";
import CurrentActionBar from "./CurrentActionBar";
function Dashboard() {
  return (
    <div className="App">
      <SearchAppBar />
      <CurrentActionBar currentAction="Questions" />
      <Stackex />
    </div>
  );
}

export default Dashboard;
