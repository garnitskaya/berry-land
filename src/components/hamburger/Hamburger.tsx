import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setOpeningMenu } from "../../store/main/slice";

import "./hamburger.scss";

const Hamburger: React.FC = () => {
  const openMenu = useAppSelector((state) => state.main.openMenu);
  const dispatch = useAppDispatch();

  const onOpenMenu = (): void => {
    dispatch(setOpeningMenu());
  };

  return (
    <div
      className={classNames("hamburger", { "hamburger__active ": openMenu })}
      onClick={onOpenMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
