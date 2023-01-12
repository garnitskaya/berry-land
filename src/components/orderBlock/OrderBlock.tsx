import { useState, useEffect } from "react";

import { Button } from "..";
import { useAppDispatch } from "../../hooks";
import { addDataForCart, dec, inc } from "../../store/mainSlice";
import { IDataForCart } from "../../types";

import "./orderBlock.scss";

interface PropsType extends IDataForCart {
  array?: boolean;
}

const OrderBlock: React.FC<PropsType> = ({ id, quantity, array = false }) => {
  const [value, setValue] = useState(quantity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  const decItem = (): void => {
    if (value > 0) {
      dispatch(dec({ id, array, value }));
    }
  };

  const incItem = (): void => {
    dispatch(inc({ id, array, value }));
  };

  const onAddItems = (): void => {
    const quantity = value;
    if (value > 0) {
      dispatch(addDataForCart({ id, quantity }));
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
