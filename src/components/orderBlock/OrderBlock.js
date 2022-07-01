import { useDispatch } from 'react-redux';
import { addDataForCart, dec, inc } from '../../store/mainSlice';
import Button from '../button/Button';
import './orderBlock.scss';

const OrderBlock = ({ id, quantity }) => {
    const dispatch = useDispatch();

    const decItem = () => {
        if (quantity > 0) {
            dispatch(dec(id));
        }
    };

    const incItem = () => {
        dispatch(inc(id));
    };

    const onAddItems = () => {
        if (quantity > 0) {
            dispatch(addDataForCart({ id, quantity }));
        }
    };

    return (
        <div className='order-block'>
            <div className='order-block__items'>
                <button className='order-block__item' onClick={decItem}>-</button>
                <div className='order-block__counter'>{quantity}</div>
                <button className='order-block__item' onClick={incItem}>+</button>
            </div>
            <Button
                onClick={onAddItems}
                children='В корзину' />
        </div>
    );
};

export default OrderBlock;