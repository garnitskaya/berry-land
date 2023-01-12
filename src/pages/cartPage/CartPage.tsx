import { CartBlocks } from "../../components";

import "./cartPage.scss";

const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="cart-page__wrap">
        <h1 className="cart-page__title">Корзина</h1>
        <CartBlocks />
      </div>
    </div>
  );
};

export default CartPage;
