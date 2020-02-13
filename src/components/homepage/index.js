import React, { Component } from "react";
import fireb from "../auth/firebase";

import { Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.login = this.login.bind(this);
  }

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  login() {
    const email = this.state.email;
    const pass = this.state.password;

    fireb
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(u => {
        console.log("Great success");
      })
      .catch(err => {
        console.log(err.toString());
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <h1 id="title">{"React Login Auth".toUpperCase()}</h1>
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

          <Button onClick={this.login}>Sign In</Button>

          <Button as={Link} to="/register">
            Register
          </Button>
        </Row>
      </Container>
    );
  }
}

export default Homepage;
