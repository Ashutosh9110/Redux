import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <a href="#">My Products</a>
          <a href="#">My Sales</a>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
