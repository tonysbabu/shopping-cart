import React, { Component } from "react";
import Layout from "../../components/Layout";
import ShoppingList from "../ShoppingList";
import ShoppingCart from "../ShoppingCart";
import "./styles.scss";

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="home-container">
          <div className="list-section">
            <ShoppingList />
          </div>
          <div className="cart-section">
            <ShoppingCart />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
