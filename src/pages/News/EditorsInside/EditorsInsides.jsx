import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const EditorsInsides = () => {
  return (
    <div className="mt-5">
      <h2 className="fw-bold">Editors Insight</h2>
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
                <h5 className="fw-bold  mb-3">
                  21 the Most Stylish Wedding Guest Dresses For Spring{" "}
                </h5>
              </Card.Title>
              <Card.Text>21/08/2025</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>
                <h5 className="fw-bold mb-3">
                  21 the Most Stylish Wedding Guest Dresses For Spring{" "}
                </h5>
              </Card.Title>
              <Card.Text>21/08/2025</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
                <h5 className="fw-bold mb-3">
                  21 the Most Stylish Wedding Guest Dresses For Spring{" "}
                </h5>
              </Card.Title>
              <Card.Text>21/08/202</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EditorsInsides;
