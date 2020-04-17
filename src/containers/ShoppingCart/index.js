import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "../../actions/cartActions";
import CartItem from "../../components/CartItem";
import { clearCart, updateTotalCost } from "../../actions/cartActions";
import "./styles.scss";

class ShoppingCart extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { items, updateCartValue } = this.props;
    if (prevProps.items !== items) {
      const total = this.props.items.reduce(
        (sum, item) => sum + item.qty * item.cost,
        0
      );
      updateCartValue(total);
    }
  }
  handleIncrement = id => {
    this.props.handleIncrementCount(id);
  };
  handleDecrement = id => {
    this.props.handleDecrementCount(id);
  };
  handleClearCart = () => this.props.clearCart();
  render() {
    const { items, totalCost } = this.props;

    return (
      <>
        <h5>Cart</h5>
        {items.length === 0 && (
          <h5 className="no-item-text">No Items in cart</h5>
        )}
        <div className="cart-list-container">
          {items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              handleRemove={this.handleRemove}
              handleIncrementCount={this.handleIncrement}
              handleDecrementCount={this.handleDecrement}
            />
          ))}
        </div>
        {items.length > 0 && (
          <div className="checkout-btn-container">
            <h4>{`Rs ${totalCost}`}</h4>
            <Button className="checkout-btn" onClick={this.handleClearCart}>
              Checkout
            </Button>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = store => ({
  items: store.cart.items,
  totalCost: store.cart.totalCost
});
const mapDispatchToProps = dispatch => ({
  handleRemove: () => {},
  handleIncrementCount: id => {
    dispatch(incrementCount(id));
  },
  handleDecrementCount: id => {
    dispatch(decrementCount(id));
  },
  clearCart: () => {
    dispatch(clearCart());
  },
  updateCartValue: total => {
    dispatch(updateTotalCost(total));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
