import React from "react";
import { Container } from "react-bootstrap";

const shopItem = ({ item }) => {
  return (
    <Container>
      <h1>{item.name}</h1>
      <h4>{item.quantity}</h4>
    </Container>
  );
};

export default shopItem;
