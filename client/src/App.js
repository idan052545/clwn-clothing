import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/cHomepage";
import ShopPage from "./pages/shop/cShop";
import CheckoutPage from "./pages/checkout/cCheckout";
import Header from "./components/header/cHeader.jsx";
import SignInAndSignUpPage from "./pages/signInUp/cSignInUp";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route
          exact
          path="/signIn"
          element={
            currentUser ? <Navigate replace to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
