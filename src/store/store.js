import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    newRealease: newRealeaseReducer,
  },
});

export default store;
