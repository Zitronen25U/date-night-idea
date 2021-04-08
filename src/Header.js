import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Header.css";
import Logout from "./LogoutButton";
import LoginButton from "./LoginButton";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ position: "sticky", top: "0", zIndex: "99"}}
      >
        <Navbar.Brand className="ubuntu" href="/">DateNight</Navbar.Brand>
        <Nav.Link className="ml-auto">
          <Link className="navItem" to="/">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link className="navItem">
          <Link className="navItem" to="/profile">
            Profile
          </Link>
        </Nav.Link>
                <Nav.Link className="navItem">
          <Link className="navItem" to="/bio">
            About Devs
          </Link>
        </Nav.Link>
        <Logout />
        <LoginButton />
      </Navbar>
    );
  }
}

export default Header;
