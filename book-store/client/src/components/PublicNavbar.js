import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import githubIcon from "../images/GitHub-Mark-64px.png";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <img src={logo} alt="react" width="200px" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/reading">
            Reading List
          </Nav.Link>
        </Nav>
        <Nav>
          <a href="https://github.com/nngocjade" target="_blank">
            <img src={githubIcon} alt="Github" width="64px" />
          </a>
        </Nav>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
