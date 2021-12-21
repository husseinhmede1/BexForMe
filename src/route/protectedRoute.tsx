import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

type ProtectedRouteProps = {
  component: React.ComponentType<any>;
  validator: boolean;
  fallBack: string;
};

const ProtectedRoute = ({
  component: Component,
  validator,
  fallBack,
  ...rest
}: ProtectedRouteProps & RouteProps) => (
  <Route
    {...rest}
    render={(props) =>
      validator ? <Component {...props} /> : <Redirect to={fallBack} />
    }
  />
);

export { ProtectedRoute };
