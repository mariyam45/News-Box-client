import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Container className="mx-auto w-25">
        <h2>Please Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button className="d-block" variant="primary" type="submit">
            Login
          </Button>
          <Form.Text>
            Don't have an Account ? <Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="text-danger d-block ">
            {/* <small> We'll never share your email with anyone else.</small> */}
          </Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
