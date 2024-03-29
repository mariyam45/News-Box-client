// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import RightNav from "../pages/Shared/RightNav/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      {/* <Outlet></Outlet> */}
      <Container>
        <Row>
          {/* <Col lg={3}>
              <LeftNav></LeftNav>
            </Col> */}
          <Col lg={9}>
            <Outlet />
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

export default NewsLayout;
