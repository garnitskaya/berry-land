import { useAppDispatch, useAppSelector } from "../../hooks";
import { filtersChanged } from "../../store/mainSlice";

import "./itemFilter.scss";

interface IBtns {
  value: string;
  label: string;
}

type OnFiltersChangedType = (value: string) => void;

const btns: IBtns[] = [
  { value: "all", label: "Все продукты" },
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
    const activeClass = isActive ? "active" : "";
    return (
      <div
        onClick={() => onFiltersChanged(value)}
        className={`filter__btn ${activeClass}`}
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
