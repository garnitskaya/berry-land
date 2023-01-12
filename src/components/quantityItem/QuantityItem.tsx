import "./quantityItem.scss";

type QuantityItemType = {
  quantity: number;
};

const QuantityItem = ({ quantity }: QuantityItemType) => {
  return <span className="quantity">{quantity}</span>;
};

export default QuantityItem;
