import { QuantityItem } from "..";
import { useAppSelector } from "../../hooks";
import { calcTotalQuantity } from "../../utils";

import shoppingCart from "../../resources/icons/ShoppingCart.svg";

import "./headerLinkCart.scss";

const HeaderLinkCart: React.FC = () => {
  const cards = useAppSelector((state) => state.cart.cards);
  return (
    <div className="header__link-cart">
      <img src={shoppingCart} alt="cart" />
      {calcTotalQuantity(cards) > 0 && (
        <QuantityItem quantity={+calcTotalQuantity(cards)} />
      )}
    </div>
  );
};

export default HeaderLinkCart;
