import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { Routes } from "../src/Routes/Routes";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Switch>
          {Routes.map((route, i) => {
            return (
              <Route
                exact
                key={i}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
