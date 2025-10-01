import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementBy5, decrementBy5 } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <main>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={() => dispatch(incrementBy5())}>Increment By 5</button>
        <button onClick={() => dispatch(decrementBy5())}>Decrement By 5</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default Counter;
