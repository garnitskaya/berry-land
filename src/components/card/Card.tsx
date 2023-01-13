import classNames from 'classnames';
import { Link } from "react-router-dom";

import { OrderBlock } from "..";
import { ICard } from "../../types";

import "./card.scss";

const Card: React.FC<ICard> = ({
  id,
  name,
  img,
  price,
  newPrice,
  quantity,
}) => {
  return (
    <div className={classNames("card", { "card__sale": newPrice })}>
      <Link to={String(id)} className="card__title">
        {name}
      </Link>
      <Link to={String(id)}>
        <img className="card__img" src={img} alt={name} />
      </Link>
      <div className="card__price">
        {newPrice ? <span className="card__price-new">{newPrice}₪</span> : null}
        <span className={classNames({ "card__price-old": newPrice })}>{price}₪</span>
        за 2.5 кг
      </div>
      <OrderBlock id={id} quantity={quantity} array />
    </div>
  );
};

export default Card;
