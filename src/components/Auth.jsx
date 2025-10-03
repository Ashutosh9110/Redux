import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login()); 
  };

  return (
    <div>
      <form onSubmit={loginHandler}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
