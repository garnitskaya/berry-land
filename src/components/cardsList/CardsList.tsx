import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Card, Spinner } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchDate } from "../../store/mainSlice";
import { ICard } from "../../types";

import "./cardsList.scss";

type FilteredItemsType = (items: ICard[], filter: string) => ICard[];
type RenderItemType = (arr: ICard[]) => JSX.Element[];

const CardsList: React.FC = () => {
  const { cards, loading, error, activeFilter } = useAppSelector((state) => state.mainSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDate());
  }, []);

  const filteredItems: FilteredItemsType = (items, filter) => {
    if (filter === "all") {
      return items;
    } else {
      return items.filter((item) => item.group === activeFilter);
    }
  };

  const renderItem: RenderItemType = (arr) => {
    return arr && arr.map((item) => <Card key={nanoid()} {...item} />);
  };

  const element = renderItem(filteredItems(cards, activeFilter));

  return (
    <>
      {loading && <Spinner />}
      {error && <h2 className="title__error">{error}</h2>}
      <div className="cards-list">{element}</div>
    </>
  );
};

export default CardsList;
