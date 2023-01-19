import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";
import { ICard } from "../main/types";
import { CartSliceType } from "./types";
import { calcTotalPrice } from './../../utils/calcTotalPrice';

const initialState: CartSliceType = {
  cards: getCartFromLocalStorage("cards"),
  totalPrice: calcTotalPrice(getCartFromLocalStorage("cards"))
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsInCart: (state, action: PayloadAction<ICard>) => {
      const findItem = state.cards.find((obj) => obj.id === action.payload.id) as ICard;

      if (findItem) {
        findItem.quantity = findItem.quantity + Number(action.payload.quantity);
      } else {
        state.cards.push({ ...action.payload });
      }

      state.totalPrice = calcTotalPrice(state.cards);
    },
    deleteItemInCart: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.cards);
    },
    clearItems: (state) => {
      state.cards = [];
    },
  },
});

export const { addItemsInCart, deleteItemInCart, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
