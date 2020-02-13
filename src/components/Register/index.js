import React, { Component } from "react";
import fireb from "../auth/firebase";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: ""
    };

    this.Register = this.Register.bind(this);
  }

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  Register() {
    const email = this.state.email;
    const pass = this.state.password;

    fireb
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(u => {
        console.log("Great sign in");
      })
      .catch(err => {
        console.log(err.toString());
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <h1 id="title">{"Register".toUpperCase()}</h1>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={this.state.name}
                onChange={this.handleName}
                type="text"
                placeholder="enter name..."
              />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={this.state.email}
                onChange={this.handleEmail}
                type="email"
                placeholder="enter email..."
              />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.handlePassword}
                type="password"
                placeholder="enter password..."
              />
            </Form.Group>
          </Form>
          <Button onClick={this.Register} as={Link} to="/">
            Register
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Register;
