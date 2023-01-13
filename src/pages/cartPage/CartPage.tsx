import { CartBlocks, WrapBlock } from "../../components";

import "./cartPage.scss";

const CartPage = () => {
  return (
    <div className="cart-page">
      <WrapBlock title="Корзина">
        <CartBlocks />
      </WrapBlock>
    </div>
  );
};

export default CartPage;
