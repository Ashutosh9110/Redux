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


const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});



export const { incrementBy5, decrementBy5 } =counterSlice.actions;
export const { login, logout } = authSlice.actions;


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
export default store;
