import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Question from "./Components/Question";
import User from "./Components/User";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/question/:question_id" component={Question} />
          <Route exact path="/user/:user_id" component={User} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
