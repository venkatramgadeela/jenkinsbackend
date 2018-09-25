import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import DefaultLayout from "../../Layouts/Default";
import Auth from "../Auth";
/* eslint-disable */

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() === true ? (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
