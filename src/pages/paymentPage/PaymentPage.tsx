import { ContactDetails, WrapBlock } from "../../components";

import "./paymentPage.scss";

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <WrapBlock title='Оформление заказа'>
        <ContactDetails />
      </WrapBlock>
    </div>
  );
};

export default PaymentPage;
