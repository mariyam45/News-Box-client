import moment from "moment";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/newsBoxlogo-01-01.png";

const Header = () => {
  return (
    <Container>
      {" "}
      <div className="my-5">
        <div className="text-center">
          <img className="w-25" src={logo} alt="" />
          <p className="text-secondary">
            <small>Journalism Without Fear or Favor</small>
            <h6>{moment().format("dddd, D MMMM YYYY")}</h6>
          </p>
        </div>
        <div className="d-flex">
          <Button variant="danger">Latest</Button>{" "}
          <Marquee speed={50} className="ms-3 text-danger">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>

        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="secondary">Login</Button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
