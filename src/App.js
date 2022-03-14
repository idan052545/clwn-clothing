import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/cHomepage";
import ShopPage from "./pages/shop/cShop";
import Header from "./components/header/cHeader.jsx";
import SignInAndSignUpPage from "./pages/signInUp/cSignInUp";
import { auth } from "./firebase/uFirebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signIn" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
