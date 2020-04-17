import React, { Component } from "react";
import { connect } from "react-redux";
import ItemCard from "../../components/ItemCard";
import { fetchList } from "../../actions/shoppingListActions";
import { addToCart } from "../../actions/cartActions";
import { Spinner } from "reactstrap";
import "./styles.scss";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  handleAddToCart = item => {
    this.props.addToCart(item);
  };
  render() {
    const { items, itemsLoading } = this.props;
    return (
      <>
        <h5 className="heading">Products</h5>
        {itemsLoading && (
          <div className="loader">
            <Spinner color="primary" />
          </div>
        )}
        <div className="shopping-list-container">
          {items.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              handleAddToCart={this.handleAddToCart}
            />
          ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = store => ({
  items: store.shoppingList.items,
  itemsLoading: store.shoppingList.itemsLoading
});
const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchList()),
  addToCart: item => dispatch(addToCart(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
