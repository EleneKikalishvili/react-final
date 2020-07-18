import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./protected.route";

import Login from "./pages/login/login.component";
import Header from "./components/header/header.component";
import Breeds from "./pages/breeds/breeds.component";
import DetailedInfro from "./pages/detailed/detailed-info.component";
import Images from "./pages/images/images.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <ProtectedRoute path="/" exact component={Breeds} />
        <ProtectedRoute path="/detailed" exact component={DetailedInfro} />
        <ProtectedRoute path="/images" exact component={Images} />
      </Switch>
    </div>
  );
}

export default App;
