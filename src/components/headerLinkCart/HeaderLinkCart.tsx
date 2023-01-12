import { QuantityItem } from "..";
import { useAppSelector } from "../../hooks";
import { calcTotalQuantity } from "../../utils";

import shoppingCart from "../../resources/icons/ShoppingCart.svg";

import "./headerLinkCart.scss";

const HeaderLinkCart: React.FC = () => {
  const { itemsInCart } = useAppSelector((state) => state.mainSlice);
  return (
    <div className="header__link-cart">
      <img src={shoppingCart} alt="cart" />
      {calcTotalQuantity(itemsInCart) > 0 && (
        <QuantityItem quantity={calcTotalQuantity(itemsInCart)} />
      )}
    </div>
  );
};

export default HeaderLinkCart;
