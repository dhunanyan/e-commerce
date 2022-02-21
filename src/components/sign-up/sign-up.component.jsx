import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="sign-up">
      <h2 className="sign-up__title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up__form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleDisplayNameChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          label="E-mail"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userData) => dispatch(signUpStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
