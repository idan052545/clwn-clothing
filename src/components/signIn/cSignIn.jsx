import React from "react";
import CustomButton from "../customButton/cCustomButton";
import FormInput from "../formInput/cFormInput";
import { signInWithGoogle } from "../../firebase/uFirebase";

import "./sSignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: " ",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefaukt();
    this.setState({ email: " ", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
