import React from "react";
import CustomButton from "../customButton/cCustomButton";
import { useSelector, useDispatch } from "react-redux";
import "./sCartDropdown.scss";
import CartItem from "../cart-item/cCartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

const CartDropdown = () => {
  let navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
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

export default CartDropdown;
