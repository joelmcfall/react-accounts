import React, { Component } from "react";

import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import fireb from "../auth/firebase";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import ShopList from "./shopList";
import AddItem from "./addItem";

class Userpage extends Component {
  state = {
    showing: false
  };

  handleLogout() {
    fireb.auth().signOut();
  }

  handleAdd = () => this.setState({ showing: true });
  handleCloseAdd = () => this.setState({ showing: false });

  render() {
    const { shopList } = this.props;

    return (
      <Container>
        <Row className="justify-content-end">
          {" "}
          <Button className="logout-btn" onClick={this.handleLogout}>
            X
          </Button>
        </Row>
        <Row className="align-items-center">
          <Col md="auto" className="user-title">
            <h1 id="title">Userpage</h1>
            <p>welcome to your Userpage</p>
          </Col>
          <Col className="user-btns">
            <Button onClick={this.handleAdd}>Add Item</Button>
            <Modal show={this.state.showing} onHide={this.handleCloseAdd}>
              <Modal.Header closeButton>
                <Modal.Title>Add Item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AddItem />
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col>
            <ShopList shopList={shopList} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    shopList: state.firestore.ordered.Items
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Items" }])
)(Userpage);
