import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import CartItem from '../cartItem/CartItem';
import { addItemsInCart } from '../../store/mainSlice';
import { itemsCart, renderItem, calcTotalPrice } from '../../utils';
import { ICard } from '../../types';

import './cart.scss';

const Cart: React.FC = () => {
    const { cards, dataForCart, itemsInCart, maxWidth } = useAppSelector(state => state.mainSlice);
    const dispatch = useAppDispatch();
    let element;

    useEffect(() => {
        const itemsInCart: ICard[] = itemsCart(cards, dataForCart);
        dispatch(addItemsInCart(itemsInCart));
    }, [dataForCart, cards])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(dataForCart));
        localStorage.setItem('cards', JSON.stringify(itemsInCart));
    }, [dataForCart, itemsInCart]);

    if (itemsInCart.length === 0) {
        element = <div className="cart-item__title">Корзина пустая</div>
    } else {
        element = renderItem(itemsInCart, CartItem);
    }

    return (
        <div className={`cart ${maxWidth >= 992 ? 'active-cart' : ''}`}>
            <h3 className='cart__title'>Корзина</h3>
            <div className="cart__blocks">
                {element}
                <svg className='cart__line' width="249" height="10" viewBox="0 0 249 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.999999 7.48114C5.58827 5.16231 7.71908 1 15.3869 1C26.0022 1 26.0022 8.99998 36.6252 8.99998C47.2482 8.99998 47.2482 1 57.8635 1C68.4787 1.00001 68.4787 8.99998 79.1017 8.99999C89.7169 8.99999 89.7169 1.00001 100.34 1.00001C110.963 1.00001 110.963 8.99999 121.578 8.99999C132.193 8.99999 132.193 1.00001 142.816 1.00001C153.439 1.00001 153.44 8.99999 164.055 8.99999C174.67 8.99999 174.67 1.00001 185.293 1.00002C195.908 1.00002 195.908 9 206.523 9C217.139 9 217.139 1.00002 227.762 1.00002C238.377 1.00002 238.377 9 249 9" stroke="#8CC63F" strokeWidth="2" />
                </svg>
                <div className='cart__subtotal'>
                    <span >Подытог: </span>
                    <span >{itemsInCart.length > 0 ? calcTotalPrice(itemsInCart) : 0}₪</span>
                </div>
            </div>
            <div className='cart__btns'>
                <Button
                    type={'green'}
                    children={<Link to='/payment'>Оплатить</Link>} />
                <Button
                    type={'white'}
                    children={<Link to='/cart'>Корзина</Link>} />
            </div>

        </div>
    );
};

export default Cart;


