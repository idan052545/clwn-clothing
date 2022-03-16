import React from "react";
import SignIn from "../../components/signIn/cSignIn";
import SignUp from "../../components/signUp/cSignUp";

import "./sSignInUp.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUpPage;
