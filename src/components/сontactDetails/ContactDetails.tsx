import { CartBlocks, Form } from "..";

import "./contactDetails.scss";

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <Form />
      <CartBlocks cl="contact-details" visibility={false} />
    </div>
  );
};

export default ContactDetails;
