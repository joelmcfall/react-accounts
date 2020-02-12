import React, { Component } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 id="title">LOGIN</h1>
        </Col>
      </Row>
      <Row>
        <Form>
          <Form.Group>
            <Form.Label></Form.Label>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
