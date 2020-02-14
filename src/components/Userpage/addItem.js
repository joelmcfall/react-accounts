import React, { Component } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

import { connect } from "react-redux";
import { createItem } from "../../store/Actions/listActions";

class AddItem extends Component {
  state = {
    name: "",
    quantity: ""
  };

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleQuantity = e => {
    this.setState({ quantity: e.target.value });
  };

  handleSumbit = e => {
    console.log(this.state);

    this.props.createNewItem(this.state);
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Form onSubmit={this.handleSumbit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Item</Form.Label>
              <Form.Control
                value={this.state.name}
                onChange={this.handleName}
                type="text"
                placeholder="Item name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicQuan">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                value={this.state.quantity}
                onChange={this.handleQuantity}
                type="text"
                placeholder="Enter quantity"
              />
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNewItem: item => dispatch(createItem(item))
  };
};
export default connect(null, mapDispatchToProps)(AddItem);
