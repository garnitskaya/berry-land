import { useState, useEffect } from "react";

import { Button } from "..";
import { useAppDispatch } from "../../hooks";
import { dec, inc } from "../../store/main/slice";
import { addItemsInCart, } from "../../store/cart/slice";
import { ICard } from "../../store/main/types";

import "./orderBlock.scss";

type PropsType = {
  card: ICard,
  obj?: boolean
}

const OrderBlock: React.FC<PropsType> = ({ card, obj }) => {
  const { quantity, id } = card
  const [value, setValue] = useState(quantity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  const decItem = (): void => {
    if (value > 0) {
      dispatch(dec({ id, value, obj }));
    }
  };

  const incItem = (): void => {
    dispatch(inc({ id, value, obj }));
  };

  const onAddItems = (): void => {
    const quantity = value;
    if (value > 0) {
      const item = {
        ...card,
        quantity
      }

      dispatch(addItemsInCart(item));
    }
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  return (
    <div className="order-block">
      <div className="order-block__items">
        <button className="order-block__item" onClick={decItem}>
          -
        </button>
        <input
          type="number"
          onChange={onChangeValue}
          value={value}
          className="order-block__counter"
        />
        <button className="order-block__item" onClick={incItem}>
          +
        </button>
      </div>
      <Button onClick={onAddItems} children="В корзину" />
    </div>
  );
};

export default OrderBlock;
