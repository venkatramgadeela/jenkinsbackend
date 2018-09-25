import React from "react";
import PropTypes from "prop-types";
import NavBar from "../NavBar";

import "./index.css";

const AppBackDrop = ({ children }) => (
  <div className="appbackdrop">
    <h1>Tesla Database and Middleware Plotform</h1>
    <NavBar />
    {children}
  </div>
);

AppBackDrop.propTypes = {
  children: PropTypes.element.isRequired
};
export default AppBackDrop;
