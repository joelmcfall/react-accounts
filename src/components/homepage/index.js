import React, { Component } from "react";
import fireb from "../auth/firebase";

import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../store/Actions/authActions";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: ""
    };

    this.login = this.login.bind(this);
  }

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ pass: e.target.value });
  };

  login() {
    this.props.signIn(this.state);
  }

  render() {
    const { authErr } = this.props;
    return (
      <Container>
        <Row className="row-login">
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

          {authErr ? (
            <Col>
              <h4 className="err-text"> {authErr} </h4>
            </Col>
          ) : null}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log("auth Err" + state.auth.authErr);
  return {
    authErr: state.auth.authErr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: details => dispatch(signIn(details))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
