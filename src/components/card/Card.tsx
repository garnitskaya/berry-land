import classNames from "classnames";
import { Link } from "react-router-dom";

import { OrderBlock } from "..";
import { ICard } from "../../store/main/types";

import "./card.scss";

type CardPropsType = {
  card: ICard;
};

const Card: React.FC<CardPropsType> = ({ card }) => {
  const { id, name, img, price, newPrice, quantity } = card;

  return (
    <div className={classNames("card", { card__sale: newPrice })}>
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
      <OrderBlock card={card} />
    </div>
  );
};

export default Card;
