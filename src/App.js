import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import CreateProject from "./components/CreateProject/CreateProject";
import JoinProject from "./components/JoinProject/JoinProject";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/CreateProject">
            <CreateProject></CreateProject>
          </Route>
          <Route path="/JoinProject">
            <JoinProject></JoinProject>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
