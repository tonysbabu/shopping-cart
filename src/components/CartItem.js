import React from "react";
import { Card, CardTitle } from "reactstrap";
import plus from "../assets/images/plus.svg";
import minus from "../assets/images/minus.svg";

export default function CartItem({
  item,
  handleIncrementCount,
  handleDecrementCount
}) {
  return (
    <Card className="cart-item-container">
      <div className="img-container">
        <img src={item.image} alt="sanitizer" />
      </div>
      <div className="info-container">
        <div className="info-content">
          <CardTitle>{item.name}</CardTitle>
        </div>
        <div className="count-container">
          <img
            className="decrement-icon"
            src={minus}
            alt="minus"
            onClick={() => handleDecrementCount(item.id)}
          />
          <input type="number" value={item.qty} disabled />
          <img
            src={plus}
            alt="plus"
            onClick={() => handleIncrementCount(item.id)}
          />
        </div>
      </div>
    </Card>
  );
}
