import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/cStripeButton";

import CheckoutItem from "../../components/checkout-item/cCheckoutItem";

import "./sCheckout.scss";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-blocks">
          <span>Product</span>
        </div>
        <div className="header-blocks">
          <span>Description</span>
        </div>
        <div className="header-blocks">
          <span>Quantity</span>
        </div>
        <div className="header-blocks">
          <span>Price</span>
        </div>
        <div className="header-blocks">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp:12/34 -cvv:567
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
