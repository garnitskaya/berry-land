import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { ICard, IDataForCart, MainState } from '../types';

const initialState:MainState = {
    cards: [],
    loading: false,
    error: null,
    dataForCart: JSON.parse(localStorage.getItem('data')||'') || [],
    itemsInCart: JSON.parse(localStorage.getItem('cards')||'') || [],
    activeFilter: 'all',
    filteredItems: [],
    maxWidth: 1200,
    openMenu: false
}

export const fetchDate = (data:ICard[]) => async (dispatch:Dispatch) => {
    try {
        dispatch(dataFetching());
        setTimeout(() => {
            dispatch(dataFetched(data));
        }, 500);
    } catch (error) {
        dispatch(dataFetchingError("Ошибка, что то пошло не так..."));
    }
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        dataFetching: (state) => {
            state.loading = true;
        },
        dataFetched: (state, action:PayloadAction<ICard[]>) => {
            state.loading = false;
            state.activeFilter = 'all';
            state.cards = action.payload;
            state.filteredItems = action.payload;
        },
        dataFetchingError: (state, action:PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        inc: (state, action:PayloadAction<number>) => {
            state.cards = state.cards.map(card => card.id === action.payload ? { ...card, quantity: card.quantity + 1 } : card);
        },
        dec: (state, action:PayloadAction<number>) => {
            state.cards = state.cards.map(card => card.id === action.payload ? { ...card, quantity: card.quantity - 1 } : card);
        },
        addDataForCart: (state, action:PayloadAction<IDataForCart>) => {
            state.dataForCart.push(action.payload);
        },
        addItemsInCart: (state, action:PayloadAction<ICard[]>) => {
            state.itemsInCart = action.payload;
        },
        deleteItemInCart: (state, action:PayloadAction<number>) => {
            state.dataForCart = state.dataForCart.filter(item => item.id !== action.payload);
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        },
        filtersChanged: (state, action:PayloadAction<string>) => {
            state.activeFilter = action.payload;
            state.filteredItems = action.payload === 'all' ?
                state.cards :
                state.cards.filter(item => item.group === action.payload);
        },
        setMaxWidth: (state, action:PayloadAction<number>) => {
            state.maxWidth = action.payload
        },
        setOpeningMenu: (state) => {
            state.openMenu = !state.openMenu;
        },
        setClosingMenu: (state) => {
            state.openMenu = false;
        }
    }
})

export const {
    dataFetching,
    dataFetched,
    dataFetchingError,
    inc, dec,
    addDataForCart,
    addItemsInCart,
    deleteItemInCart,
    filtersChanged,
    setMaxWidth,
    setOpeningMenu,
    setClosingMenu } = mainSlice.actions;

export default mainSlice.reducer