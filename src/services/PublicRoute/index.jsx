import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import DefaultLayout from "../../Layouts/Default";

const PublicRoute = ({ component: Component }) => (
  <Route
    render={props => (
      <DefaultLayout>
        <Component {...props} />
      </DefaultLayout>
    )}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PublicRoute;
