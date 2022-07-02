import { ICard } from '../../types';
import OrderBlock from '../orderBlock/OrderBlock';
import './card.scss';

const Card:React.FC<ICard> = ({ id, name, img, price, newPrice, quantity }) => {
    return (
        <div className={`card ${newPrice ? 'card__sale' : null}`}>
            <h2 className='card__title'>{name}</h2>
            <img className='card__img' src={img} alt={name} />
            <div className='card__price'>
                {newPrice ? <span className='card__price-new'>{newPrice}₪</span> : null}
                <span className={newPrice ? 'card__price-old' : ''}>{price}₪</span>
                за 2.5 кг
            </div>
            <OrderBlock id={id} quantity={quantity} />
        </div>
    );
};

export default Card;