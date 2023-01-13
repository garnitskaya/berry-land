import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ActiveFilterType, ICard, IData, IDataForCart, MainState } from "../types";
import { getCartFromLocalStorage } from "./../utils/getCartFromLocalStorage";

const initialState: MainState = {
  cards: getCartFromLocalStorage("cards"),
  card: {} as ICard,
  loading: false,
  error: null,
  dataForCart: getCartFromLocalStorage("data"),
  itemsInCart: getCartFromLocalStorage("cardsInCart"),
  activeFilter: "",
  filteredItems: [],
  openMenu: false,
  visibleModal: false,
};

export const fetchDate = createAsyncThunk<ICard[], string, { rejectValue: string }>(
  "main /fetchDate", async (group, { rejectWithValue }) => {
    try {
      const filter = `group=${group}`;
      const response = await axios.get<ICard[]>(`/cards?${group && filter}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ошибка, что то пошло не так...");
    }
  });

export const fetchDateItem = createAsyncThunk<ICard, number, { rejectValue: string }>(
  "main /fetchDateItem", async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get<ICard>(`/cards/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ошибка, что то пошло не так...");
    }
  });

export const postDate = createAsyncThunk<IData[], IData, { rejectValue: string }>(
  "main /postDate", async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post<IData[]>(
        "http://localhost:3001/data",
        data
      );
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ошибка, отправки данных...");
    }
  });

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    inc: (state, action: PayloadAction<{ id: number; array: boolean; value?: number }>) => {
      action.payload.array
        ? (state.cards = state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, quantity: Number(action.payload.value) + 1 }
            : card
        ))
        : (state.card.quantity = Number(action.payload.value) + 1);
    },
    dec: (state, action: PayloadAction<{ id: number; array: boolean; value?: number }>) => {
      action.payload.array
        ? (state.cards = state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, quantity: Number(action.payload.value) - 1 }
            : card
        ))
        : (state.card.quantity = Number(action.payload.value) - 1);
    },
    addDataForCart: (state, action: PayloadAction<IDataForCart>) => {
      state.dataForCart.push(action.payload);
    },
    addItemsInCart: (state, action: PayloadAction<ICard[]>) => {
      state.itemsInCart = action.payload;
    },
    deleteItemInCart: (state, action: PayloadAction<number>) => {
      state.dataForCart = state.dataForCart.filter(
        (item) => item.id !== action.payload
      );
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );
    },
    filtersChanged: (state, action: PayloadAction<ActiveFilterType>) => {
      state.activeFilter = action.payload;
      state.filteredItems =
        action.payload === ""
          ? state.cards
          : state.cards.filter((item) => item.group === action.payload);
    },
    setOpeningMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
    setClosingMenu: (state) => {
      state.openMenu = false;
    },
    setVisibleModal: (state, action: PayloadAction<boolean>) => {
      state.visibleModal = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDate.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDate.fulfilled, (state, action: PayloadAction<ICard[]>) => {
        state.loading = false;
        state.cards = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchDate.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchDateItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDateItem.fulfilled, (state, action: PayloadAction<ICard>) => {
        state.loading = false;
        state.card = action.payload;
      }
      )
      .addCase(fetchDateItem.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postDate.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addDefaultCase(() => { });
  },
});

export const {
  inc,
  dec,
  addDataForCart,
  addItemsInCart,
  deleteItemInCart,
  filtersChanged,
  setOpeningMenu,
  setClosingMenu,
  setVisibleModal
} = mainSlice.actions;

export default mainSlice.reducer;
