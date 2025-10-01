// src/store/index.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {

    incrementBy5: (state) => {
      state.counter += 5;
    },
    decrementBy5: (state) => {
      state.counter -= 5;
    },
  },
});

export const { incrementBy5, decrementBy5 } =
  counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
