import React from "react";

import { Container, Row, Col, Form } from "react-bootstrap";

function Userpage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 id="title">Userpage</h1>
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

export default Userpage;
