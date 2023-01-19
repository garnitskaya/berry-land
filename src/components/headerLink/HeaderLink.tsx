import { useEffect } from "react";
import { Link, useMatch } from "react-router-dom";
import classNames from "classnames";

import { QuantityItem } from "..";
import { useAppDispatch, useAppSelector, useMatchMedia } from "../../hooks";
import { calcTotalQuantity } from "../../utils";
import { setClosingMenu } from "../../store/main/slice";
import { IHeaderLink } from "../../store/main/types";

import "./headerLink.scss";

const HeaderLink: React.FC<IHeaderLink> = ({
  path,
  label,
  img,
  src,
  alt,
  visible,
}) => {
  const { cards } = useAppSelector((state) => state.cart);
  const { isMobile, isTablet } = useMatchMedia();
  const match = useMatch({ path, end: true });
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const visibleQuantity = !isTablet && alt === "cart-link" && calcTotalQuantity(cards) > 0;

  const closeMenu = () => {
    visible && isMobile && dispatch(setClosingMenu());
  };

  const linkClass = classNames({
    header__link: true,
    [alt]: `${alt ? alt : ""}`,
    active: match,
  });

  return (
    <li onClick={closeMenu}>
      <Link to={path} className={linkClass}>
        {label}
        {img ? (
          <img className={`header__link-${alt}`} src={src} alt={alt} />
        ) : null}

        {visibleQuantity && (
          <QuantityItem quantity={+calcTotalQuantity(cards)} />
        )}
      </Link>
    </li>
  );
};

export default HeaderLink;
