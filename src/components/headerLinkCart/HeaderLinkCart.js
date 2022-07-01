import { useSelector } from 'react-redux';
import { calcTotalQuantity } from '../../utils';
import shoppingCart from '../../resources/icons/ShoppingCart.svg';
import './headerLinkCart.scss';

const HeaderLinkCart = () => {
    const { itemsInCart } = useSelector(state => state.mainSlice);
    return (
        <div className='header__link-cart'>
            <img src={shoppingCart} alt='cart' />
            {calcTotalQuantity(itemsInCart) > 0 &&
                <span className='header__link-quantity'>{calcTotalQuantity(itemsInCart)}</span>}
        </div>
    );
};

export default HeaderLinkCart;