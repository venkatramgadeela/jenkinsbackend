import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DefaultLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default DefaultLayout;
