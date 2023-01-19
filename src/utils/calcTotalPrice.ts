import { ICard } from "../store/main/types";

export const calcTotalPrice = (item: ICard[]):string => {
  const sum = item.reduce(
    (acc, item) =>
      item.newPrice
        ? (acc += +item.newPrice * item.quantity)
        : (acc += +item.price * item.quantity),
    0
  );
  return sum.toFixed(2);
};

export const calcTotalQuantity = (item: ICard[]):number => {
  const sum = item.reduce((acc, item) => (acc += +item.quantity), 0);
  return sum;
};
