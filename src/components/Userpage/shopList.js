import React from "react";
import { Container } from "react-bootstrap";

import ShopItem from "./shopItem";

const ShopList = ({ shopList }) => {
  return (
    <Container>
      {shopList &&
        shopList.map(item => {
          return <ShopItem item={item} key={item.id} />;
        })}
    </Container>
  );
};

export default ShopList;
