import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Question from "./Components/Question";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/question/:question_id" component={Question} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
