import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveFilterType, ICard, MainState } from "./types";
import { fetchDate, fetchDateItem, postDate } from "./asyncActions";

const initialState: MainState = {
  cards: [],
  card: {} as ICard,
  loading: false,
  error: null,
  activeFilter: "",
  openMenu: false,
  visibleModal: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    inc: (state, action: PayloadAction<{ id: number; value?: number; obj: boolean | undefined }>) => {
      const findItem: ICard | undefined = state.cards.find((obj) => obj.id === action.payload.id)

      if (findItem && !action.payload.obj) {
        findItem.quantity = Number(action.payload.value) + 1
      } else {
        state.card.quantity = Number(action.payload.value) + 1
      }
    },
    dec: (state, action: PayloadAction<{ id: number; value?: number; obj: boolean | undefined }>) => {
      const findItem: ICard | undefined = state.cards.find((obj) => obj.id === action.payload.id)

      if (findItem && !action.payload.obj) {
        findItem.quantity = Number(action.payload.value) - 1
      } else {
        state.card.quantity = Number(action.payload.value) - 1
      }
    },
    filtersChanged: (state, action: PayloadAction<ActiveFilterType>) => {
      state.activeFilter = action.payload;
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
        state.error = "";
      })
      .addCase(fetchDate.fulfilled, (state, action: PayloadAction<ICard[]>) => {
        state.loading = false;
        state.cards = action.payload;
      })
      .addCase(fetchDate.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchDateItem.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchDateItem.fulfilled, (state, action: PayloadAction<ICard>) => {
        state.loading = false;
        state.card = action.payload;
      })
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
  filtersChanged,
  setOpeningMenu,
  setClosingMenu,
  setVisibleModal
} = mainSlice.actions;

export default mainSlice.reducer;
