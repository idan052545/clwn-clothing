import React from "react";
import CustomButton from "../customButton/cCustomButton";
import { connect } from "react-redux";
import "./sCartDropdown.scss";
import CartItem from "../cart-item/cCartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

const CartDropdown = ({ cartItems, dispatch }) => {
  let navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          navigate("/checkout");
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
