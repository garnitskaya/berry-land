import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { filtersChanged } from "../../store/mainSlice";
import { ActiveFilterType } from '../../types';

import "./itemFilter.scss";
type IBtns = {
  value: ActiveFilterType;
  label: string;
}

type OnFiltersChangedType = (value: ActiveFilterType) => void;

const btns: IBtns[] = [
  { value: "", label: "Все продукты" },
  { value: "berries", label: "Ягоды" },
  { value: "superfood", label: "Суперфуд" },
];

const ItemFilter: React.FC = () => {
  const { activeFilter } = useAppSelector((state) => state.mainSlice);
  const dispatch = useAppDispatch();

  const onFiltersChanged: OnFiltersChangedType = (value) => {
    dispatch(filtersChanged(value));
  };

  const items = btns.map(({ value, label }) => {
    const isActive = value === activeFilter;
    return (
      <div
        onClick={() => onFiltersChanged(value)}
        className={classNames("filter__btn", { "active": isActive })}
        key={value}
      >
        {label}
      </div>
    );
  });

  return (
    <div className="filter">
      <div className="filter__wrap">{items}</div>
    </div>
  );
};

export default ItemFilter;
