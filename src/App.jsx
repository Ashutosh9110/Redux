
import './App.css'
import React from "react";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && (
        <>
          <div>My User Profile</div>
          <Counter />
        </>
      )}
    </>
  );
};

export default App;
