import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import ETQAmsterdam from "../containers/EQTAmsterdam/HomePage/";
import MainPage from "../containers/MainPage";

const getRoutes = () => {
  let routes;

  return (routes = (
    <Switch>
      <Route path="/ETQAmsterdam" component={ETQAmsterdam} />
      <Route path="/" component={MainPage} />

      <Redirect path="/" />
    </Switch>
  ));
};

export default getRoutes;
