import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
import { ICard, IData, IDataForCart, MainState } from '../types';
import { getCartFromLocalStorage } from './../utils/getCartFromLocalStorage';

const initialState: MainState = {
    cards: [],
    loading: false,
    error: null,
    dataForCart: getCartFromLocalStorage('data'),
    itemsInCart: getCartFromLocalStorage('cards'),
    activeFilter: 'all',
    filteredItems: [],
    maxWidth: 1200,
    openMenu: false,
    visibleModal: false
}

export const fetchDate = createAsyncThunk(
    'main /fetchDate',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICard[]>('/cards')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Ошибка, что то пошло не так...");
        }
    }
)

export const postDate = createAsyncThunk(
    'main /postDate',
    async (data: IData) => {
        const response = await axios.post<IData[]>('/data', data)
        return response.data;
    }
)


export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        inc: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.map(card => card.id === action.payload ? { ...card, quantity: card.quantity + 1 } : card);
        },
        dec: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.map(card => card.id === action.payload ? { ...card, quantity: card.quantity - 1 } : card);
        },
        addDataForCart: (state, action: PayloadAction<IDataForCart>) => {
            state.dataForCart.push(action.payload);
        },
        addItemsInCart: (state, action: PayloadAction<ICard[]>) => {
            state.itemsInCart = action.payload;
        },
        deleteItemInCart: (state, action: PayloadAction<number>) => {
            state.dataForCart = state.dataForCart.filter(item => item.id !== action.payload);
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        },
        filtersChanged: (state, action: PayloadAction<string>) => {
            state.activeFilter = action.payload;
            state.filteredItems = action.payload === 'all' ?
                state.cards :
                state.cards.filter(item => item.group === action.payload);
        },
        setMaxWidth: (state, action: PayloadAction<number>) => {
            state.maxWidth = action.payload
        },
        setOpeningMenu: (state) => {
            state.openMenu = !state.openMenu;
        },
        setClosingMenu: (state) => {
            state.openMenu = false;
        },
        setVisibleModal: (state, action: PayloadAction<boolean>) => {
            state.visibleModal = action.payload;
        },
        setResettingCart: (state) => {
            state.dataForCart = [];
            state.itemsInCart = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDate.pending, state => {
                state.loading = true;
            })
            .addCase(fetchDate.fulfilled, (state, action: PayloadAction<ICard[]>) => {
                state.loading = false;
                state.activeFilter = 'all';
                state.cards = action.payload;
                state.filteredItems = action.payload;
            })
            .addCase(fetchDate.rejected, (state, action: PayloadAction<any>) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addDefaultCase(() => { })
    }
})

export const {
    inc, dec,
    addDataForCart,
    addItemsInCart,
    deleteItemInCart,
    filtersChanged,
    setMaxWidth,
    setOpeningMenu,
    setClosingMenu,
    setVisibleModal,
    setResettingCart } = mainSlice.actions;

export default mainSlice.reducer