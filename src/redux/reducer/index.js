const initialState = {
    cards: [],
    loading: false,
    error: null,
    dataForCart: JSON.parse(localStorage.getItem('data')) || [],
    itemsInCart: JSON.parse(localStorage.getItem('cards')) || [],
    activeFilter: 'all',
    filteredItems: [],
    maxWidth: 0,
    openMenu: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                activeFilter: 'all',
                cards: action.payload,
                filteredItems: action.payload,
            }
        case 'FETCH_DATA_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case 'INC':
            return {
                ...state,
                cards: state.cards.map(card =>
                    card.id === action.payload ? { ...card, quantity: card.quantity + 1 } : card)
            }
        case 'DEC':
            return {
                ...state,
                cards: state.cards.map(card =>
                    card.id === action.payload ? { ...card, quantity: card.quantity - 1 } : card)
            }
        case 'ADD_DATA_FOR_CART':
            return {
                ...state,
                dataForCart: [...state.dataForCart, { id: action.id, quantity: action.quantity }],
            }
        case 'ADD_ITEMS_IN_CART':
            return {
                ...state,
                itemsInCart: action.payload,
            }
        case 'DELETE_ITEM_IN_CART':
            return {
                ...state,
                dataForCart: state.dataForCart.filter(item => item.id !== action.payload),
                itemsInCart: state.itemsInCart.filter(item => item.id !== action.payload)
            }
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
                filteredItems: action.payload === 'all' ?
                    state.cards :
                    state.cards.filter(item => item.group === action.payload),
            }
        case 'SET_MAX_WIDTH':
            return {
                ...state,
                maxWidth: action.payload
            }
        case 'SET_OPENING_MENU':
            return {
                ...state,
                openMenu: !state.openMenu
            }
        case 'SET_CLOSING_MENU':
            return {
                ...state,
                openMenu: action.payload
            }
        default:
            return state;
    }
}
export default reducer;


export const inc = (id) => ({ type: 'INC', payload: id });
export const dec = (id) => ({ type: 'DEC', payload: id });
export const addDataForCart = (id, quantity) => ({ type: 'ADD_DATA_FOR_CART', id, quantity });
export const addItemsInCart = (cards) => ({ type: 'ADD_ITEMS_IN_CART', payload: cards });
export const deleteItemInCart = (id) => ({ type: 'DELETE_ITEM_IN_CART', payload: id });
export const filtersChanged = (filter) => ({ type: 'ACTIVE_FILTER_CHANGED', payload: filter });
export const setMaxWidth = (max) => ({ type: 'SET_MAX_WIDTH', payload: max });
export const setOpeningMenu = () => ({ type: 'SET_OPENING_MENU' });
export const setClosingMenu = () => ({ type: 'SET_CLOSING_MENU', payload: false });

export const fetchDate = (data) => async dispatch => {
    try {
        dispatch({ type: 'FETCH_DATA' });
        setTimeout(() => {
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        }, 500);
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_ERROR', payload: "Ошибка, что то пошло не так..." });
    }
}