import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSearchParams } from 'react-router-dom';

import { Card, Spinner } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchDate, filtersChanged } from "../../store/mainSlice";
import { ActiveFilterType, ICard } from "../../types";

import "./cardsList.scss";

type QueryParamsType = {
  group?: string;
};

type RenderItemType = (arr: ICard[]) => JSX.Element[];

const CardsList: React.FC = () => {
  const { cards, loading, error, activeFilter } = useAppSelector((state) => state.mainSlice);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get("group") || "";

  useEffect(() => {
    let params: QueryParamsType = {};
    if (activeFilter.length) params.group = activeFilter;

    setSearchParams(params);
    dispatch(fetchDate(activeFilter));
  }, [activeFilter, searchParams]);

  useEffect(() => {
    if (filter) {
      dispatch(filtersChanged(filter as ActiveFilterType));
    }
  }, []);

  const renderItem: RenderItemType = (arr) => {
    return arr && arr.map((item) => <Card key={nanoid()} {...item} />);
  };

  const element = renderItem(cards);

  return (
    <>
      {error && <h2 className="title__error">{error}</h2>}
      {loading ? <Spinner /> : <div className="cards-list">{element}</div>}
    </>
  );
};

export default CardsList;
