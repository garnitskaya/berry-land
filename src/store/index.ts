import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./main/slice";
import authSlice from "./auth/slice";
import cartSlice from "./cart/slice";

const store = configureStore({
  reducer: {
    main: mainSlice,
    auth: authSlice,
    cart: cartSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
