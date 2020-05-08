import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/landing-page">
            <LandingPage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
