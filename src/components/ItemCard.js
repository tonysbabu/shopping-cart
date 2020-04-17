import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function ItemCard({ item, handleAddToCart }) {
  return (
    <Card className="item-card">
      <div className="img-container">
        <img src={item.image} alt="Card cap" />
      </div>
      <CardBody className="item-info">
        <CardTitle>{item.name}</CardTitle>
        <CardSubtitle>sold by Dunzo</CardSubtitle>
      </CardBody>
      <CardBody className="item-button">
        <CardText>{item.description}</CardText>
        <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
      </CardBody>
    </Card>
  );
}
