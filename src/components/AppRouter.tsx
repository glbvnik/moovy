import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouteNames, routes } from "../routes";

const AppRouter: FC = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to={RouteNames.HOME} />
    </Switch>
  );
};

export default AppRouter;
