import React, { Component } from "react";

import { Container, Row, Col, Form } from "react-bootstrap";
import fireb from "../auth/firebase";

class Userpage extends Component {
  handleLogout() {
    fireb.auth().signOut();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 id="title">Userpage</h1>
            <p>welcome to your Userpage</p>
          </Col>
        </Row>
        <Row>
          <button className="j-btn" onClick={this.handleLogout}>
            Logout
          </button>
        </Row>
      </Container>
    );
  }
}

export default Userpage;
