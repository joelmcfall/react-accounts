import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Container>
      <Row>
        <h1 id="title">{"Register".toUpperCase()}</h1>
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
        <Button as={Link} to="/">
          Register
        </Button>
      </Row>
    </Container>
  );
}

export default Register;
