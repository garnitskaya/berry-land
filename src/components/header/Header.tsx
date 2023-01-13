import classNames from 'classnames';
import { Hamburger, HeaderLink, HeaderLinkCart } from "..";
import { useAppSelector, useMatchMedia } from "../../hooks";
import { IHeaderLink } from "../../types";

import logo from "../../resources/icons/logo-icon.png";
import flag from "../../resources/icons/israel-flag-icon.png";

import "./header.scss";

const Header: React.FC = () => {
  const { openMenu } = useAppSelector((state) => state.mainSlice);
  const { isMobile, isTablet } = useMatchMedia();

  const link: IHeaderLink[] = [
    { path: "", label: "Иврит", img: true, src: `${flag}`, alt: "flag", visible: true, },
    { path: "all", label: "Все продукты", alt: "", visible: true },
    { path: "recipes", label: "Рецепты", alt: "", visible: true },
    { path: "all", label: "", img: true, src: `${logo}`, alt: "logo", visible: false, },
    { path: "delivery", label: "Доставка", alt: "", visible: true },
    { path: "payment", label: "Оплата", alt: "", visible: true },
    { path: "cart", label: isTablet ? <HeaderLinkCart /> : "Корзина", alt: "cart-link", visible: false, },
  ];

  const items = link.map((item, id) => <HeaderLink key={id} {...item} />);
  const itemsHidden = link
    .filter((item) => !item.visible)
    .map((item, id) => <HeaderLink key={id} {...item} />);
  const itemsVisible = link
    .filter((item) => item.visible)
    .map((item, id) => <HeaderLink key={id} {...item} />);

  return (
    <div className="header">
      <div className="container">
        {isMobile && (
          <ul className="header__menu">
            <Hamburger />
            {itemsHidden}
          </ul>
        )}
        <ul className={classNames("header__list", { "header__list__active":openMenu })} >
          {isMobile ? itemsVisible : items}
        </ul>
      </div>
    </div>
  );
};

export default Header;
