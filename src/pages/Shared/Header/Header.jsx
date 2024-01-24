import moment from "moment";
import React from "react";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import logo from "../../../assets/newsBoxlogo-01-01.png";

const Header = () => {
  return (
    <Container>
      {" "}
      <div className="mt-5">
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
      </div>
    </Container>
  );
};

export default Header;
