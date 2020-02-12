import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <Container>
      <Row>
        <h1 id="title">{"React Login Auth".toUpperCase()}</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="enter email..." />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter password..." />
          </Form.Group>
        </Form>

        <Button as={Link} to="/user">
          Sign In
        </Button>

        <Button as={Link} to="/register">
          Register
        </Button>
      </Row>
    </Container>
  );
}

export default Homepage;
