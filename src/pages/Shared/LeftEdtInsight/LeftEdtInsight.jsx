import React from "react";
import { Card } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";

const LeftEdtInsight = () => {
  return (
    <div>
      <Card className=" mt-2">
        <Card.Img variant="top" src={first} />
        <Card.Body>
          <Card.Title>
            <h5 className="fw-bold  mb-3">
              21 the Most Stylish Wedding Guest Dresses For Spring{" "}
            </h5>
          </Card.Title>
          <Card.Text>
            {" "}
            Sports
            <span className="text-secondary">
              <FaCalendar className="me-2 ms-3 " /> 21/08/2025
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-2">
        <Card.Img variant="top" src={second} />
        <Card.Body>
          <Card.Title>
            <h5 className="fw-bold mb-3">
              21 the Most Stylish Wedding Guest Dresses For Spring{" "}
            </h5>
          </Card.Title>
          <Card.Text>
            {" "}
            Sports
            <span className="text-secondary">
              <FaCalendar className="me-2 ms-3 " /> 21/08/2025
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-2">
        <Card.Img variant="top" src={third} />
        <Card.Body>
          <Card.Title>
            <h5 className="fw-bold mb-3">
              21 the Most Stylish Wedding Guest Dresses For Spring{" "}
            </h5>
          </Card.Title>
          <Card.Text>
            {" "}
            Sports
            <span className="text-secondary">
              <FaCalendar className="me-2 ms-3 " /> 21/08/2025
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LeftEdtInsight;
