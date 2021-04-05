import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position:'absolute',bottom:0,left:0,right:0}}>
        <Navbar.Brand>&copy; Date Ideas</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
