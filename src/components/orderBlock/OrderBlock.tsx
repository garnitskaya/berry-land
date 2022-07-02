import { useAppDispatch } from '../../hooks/useTypedSelector';
import { addDataForCart, dec, inc } from '../../store/mainSlice';
import { IDataForCart } from '../../types';
import Button from '../button/Button';

import './orderBlock.scss';

const OrderBlock:React.FC<IDataForCart> = ({ id, quantity }) => {
    const dispatch = useAppDispatch();

    const decItem = ():void => {
        if (quantity > 0) {
            dispatch(dec(id));
        }
    };

    const incItem = ():void => {
        dispatch(inc(id));
    };

    const onAddItems = ():void => {
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