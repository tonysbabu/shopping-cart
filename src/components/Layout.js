import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar style={{ height: "5vh" }} dark expand="md" color="dark">
        <NavbarBrand href="/">Shopping.com</NavbarBrand>
      </Navbar>
      {children}
    </div>
  );
}
