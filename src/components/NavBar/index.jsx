import React from "react";
import { Nav, NavLink } from "reactstrap";

const NavBar = () => (
  <div>
    <Nav>
      <NavLink href="/mebbackup/">MEB Backup</NavLink>
      <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink>{" "}
      <NavLink disabled href="#">
        Disabled Link
      </NavLink>
    </Nav>
  </div>
);

export default NavBar;
