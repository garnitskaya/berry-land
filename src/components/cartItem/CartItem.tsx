import { useAppDispatch } from "../../hooks";
import { deleteItemInCart } from "../../store/cart/slice";
import { ICartItem } from "../../store/main/types";

import "./cartItem.scss";

const CartItem: React.FC<ICartItem> = ({
  id,
  name,
  quantity,
  price,
  newPrice,
  img,
  imgBlock,
}) => {
  const dispatch = useAppDispatch();

  const deleteItem = (): void => {
    if (window.confirm("Вы действительно хотите удалить из корзины?")) {
      dispatch(deleteItemInCart(id));
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item__trash" onClick={deleteItem}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 5.25L3.75 5.25001"
            stroke="#DD4456"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.75 9.75V15.75"
            stroke="#DD4456"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.25 9.75V15.75"
            stroke="#DD4456"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.25 2.25H15.75"
            stroke="#DD4456"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25"
            stroke="#DD4456"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {imgBlock && <img className="cart-item__img" src={img} alt={name} />}
      <div>
        <div className="cart-item__title">{name}</div>
        <div className="cart-item__order">
          {quantity} x {newPrice ? newPrice : price}₪
        </div>
      </div>
    </div>
  );
};

export default CartItem;
