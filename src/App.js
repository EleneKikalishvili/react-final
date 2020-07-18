import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./protected.route";

import Login from "./pages/login/login.component";
import Header from "./components/header/header.component";
import Breeds from "./pages/breeds/breeds.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <ProtectedRoute path="/" exact component={Breeds} />
      </Switch>
    </div>
  );
}

export default App;
