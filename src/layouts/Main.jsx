// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      {/* <Outlet></Outlet> */}
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h2>main content</h2>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
