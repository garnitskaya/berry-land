import { Link } from "react-router-dom";

import { Button, CartItem } from "..";
import { renderItem, calcTotalPrice } from "../../utils";
import { useAppSelector } from "../../hooks";

import "./cartBlocks.scss";

interface ICartBlocks {
  visibility?: boolean;
  cl?: string;
}

const CartBlocks: React.FC<ICartBlocks> = ({ visibility = true, cl = "" }) => {
  const { itemsInCart } = useAppSelector((state) => state.mainSlice);
  let element;

  if (itemsInCart.length === 0) {
    element = <div className="cart-page__subtitle">Корзина пустая</div>;
  } else {
    element = renderItem(itemsInCart, CartItem, true);
  }

  return (
    <div className={`cart-blocks ${cl}__block`}>
      <div className="cart-blocks__items">{element}</div>
      <div className={`cart-blocks__line ${cl}__line`}>
        <svg
          width="10"
          height="249"
          viewBox="0 0 10 249"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.51884 1C4.83767 5.58827 8.99998 7.71907 8.99998 15.3869C8.99998 26.0022 1 26.0022 1 36.6252C1 47.2482 8.99998 47.2482 8.99998 57.8634C8.99998 68.4787 1 68.4787 1 79.1017C1 89.717 8.99998 89.7169 8.99998 100.34C8.99998 110.963 1 110.963 1 121.578C1 132.193 8.99998 132.193 8.99998 142.816C8.99998 153.439 1 153.44 1 164.055C1 174.67 8.99998 174.67 8.99998 185.293C8.99998 195.908 1 195.908 1 206.523C1 217.139 8.99998 217.139 8.99998 227.762C8.99998 238.377 1 238.377 1 249"
            stroke="#8CC63F"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="cart-blocks__total">
        <div className="cart-blocks__subtotal">
          <span>Подытог: </span>
          <span>
            {itemsInCart.length > 0 ? calcTotalPrice(itemsInCart) : 0}₪
          </span>
        </div>
        {visibility && itemsInCart.length > 0 && (
          <Button
            color={"green"}
            children={<Link to="/payment">Оформить заказ</Link>}
          />
        )}
      </div>
    </div>
  );
};

export default CartBlocks;
