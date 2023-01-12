import { ICard } from "../types";

type CalcTotalType = (item: ICard[]) => number;

export const calcTotalPrice: CalcTotalType = (item) => {
  const sum = item.reduce(
    (acc, item) =>
      item.newPrice
        ? (acc += +item.newPrice * item.quantity)
        : (acc += +item.price * item.quantity),
    0
  );
  return +sum.toFixed(2);
};

export const calcTotalQuantity: CalcTotalType = (item) => {
  const sum = item.reduce((acc, item) => (acc += +item.quantity), 0);
  return sum;
};
