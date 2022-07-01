import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cards: [],
    loading: false,
    error: null,
    dataForCart: JSON.parse(localStorage.getItem('data')) || [],
    itemsInCart: JSON.parse(localStorage.getItem('cards')) || [],
    activeFilter: 'all',
    filteredItems: [],
    maxWidth: 1200,
    openMenu: false
}

export const fetchDate = (data) => async dispatch => {
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
        dataFetched: (state, action) => {
            state.loading = false;
            state.activeFilter = 'all';
            state.cards = action.payload;
            state.filteredItems = action.payload;
        },
        dataFetchingError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        inc: (state, action) => {
            state.cards = state.cards.map(card => card.id === action.payload ? { ...card, quantity: card.quantity + 1 } : card);
        },
        dec: (state, action) => {
            state.cards = state.cards.map(card => card.id === action.payload ? { ...card, quantity: card.quantity - 1 } : card);
        },
        addDataForCart: (state, action) => {
            state.dataForCart.push(action.payload);
        },
        addItemsInCart: (state, action) => {
            state.itemsInCart = action.payload;
        },
        deleteItemInCart: (state, action) => {
            state.dataForCart = state.dataForCart.filter(item => item.id !== action.payload);
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        },
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload;
            state.filteredItems = action.payload === 'all' ?
                state.cards :
                state.cards.filter(item => item.group === action.payload);
        },
        setMaxWidth: (state, action) => {
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