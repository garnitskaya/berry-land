import ContactDetails from './../../components/сontact-details/ContactDetails';

import './paymentPage.scss';

const PaymentPage = () => {
    return (
        <div className='payment-page'>
            <div className='payment-page__wrap'>
                <h1 className='payment-page__title'>Оформление заказа</h1>
                <ContactDetails />
            </div>
        </div>
    );
};

export default PaymentPage;