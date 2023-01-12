import { useEffect } from "react";

import { addItemsInCart } from "../store/mainSlice";
import { ICard, IDataForCart } from "../types";
import { itemsCart } from "../utils";
import { useAppDispatch } from "./useTypedSelector";

export const useUpdateItemInCart = (
  cards: ICard[],
  dataForCart: IDataForCart[]
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const itemsInCart: ICard[] = itemsCart(cards, dataForCart);
    dispatch(addItemsInCart(itemsInCart));
  }, [dataForCart, cards]);
};
