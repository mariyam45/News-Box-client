import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthPorvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/category/0");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Container className="mx-auto w-25">
        <h2>Please Login</h2>
        <Form onSubmit={handleLogin}>
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
            <Form.Check type="checkbox" label="Remember Me!" />
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
