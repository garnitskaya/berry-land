import Form from '../form/Form';
import CartBlocks from './../cartBlocks/CartBlocks';

import "./contactDetails.scss";

const ContactDetails = () => {
    return (
        <div className="contact-details">
            <Form />
            <CartBlocks
                cl='contact-details'
                visibility={false} />
        </div>
    );
};

export default ContactDetails;
