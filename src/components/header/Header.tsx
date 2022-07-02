import { useEffect, useRef } from 'react';
import { setMaxWidth } from '../../store/mainSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import HeaderLink from '../headerLink/HeaderLink';
import Hamburger from '../hamburger/Hamburger';
import HeaderLinkCart from '../headerLinkCart/HeaderLinkCart';
import logo from '../../resources/icons/logo-icon.png';
import flag from '../../resources/icons/israel-flag-icon.png';
import { IHeaderLink } from '../../types';

import './header.scss';

const Header:React.FC = () => {
    const { openMenu, maxWidth } = useAppSelector(state => state.mainSlice);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null!);

    const resizeHandler = ():void => {
        const { clientWidth } = ref.current || {};
        dispatch(setMaxWidth(clientWidth));
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    const link:IHeaderLink[] = [
        { path: './', label: 'Иврит', img: true, src: `${flag}`, alt: 'flag', visible: true },
        { path: './all', label: 'Все продукты',alt:'', visible: true },
        { path: './recipes', label: 'Рецепты',alt:'',  visible: true },
        { path: './all', label: '', img: true, src: `${logo}`, alt: 'logo', visible: false },
        { path: './delivery', label: 'Доставка',alt:'', visible: true },
        { path: './payment', label: 'Оплата', alt:'', visible: true },
        { path: './cart', label: maxWidth > 992 ? 'Корзина' : <HeaderLinkCart />, alt: 'cart-link', visible: false },
    ];

    const items = link.map((item, id) => <HeaderLink key={id} {...item} />);
    const itemsHidden = link.filter(item => !item.visible).map((item, id) => <HeaderLink key={id} {...item} />);
    const itemsVisible = link.filter(item => item.visible).map((item, id) => <HeaderLink key={id} {...item} />);

    return (
        <div className='header' ref={ref}>
            <div className='container'>

                {
                    maxWidth <= 768 &&
                    <ul className='header__menu'>
                        <Hamburger />
                        {itemsHidden}
                    </ul>
                }
                <ul className={`header__list ${openMenu ? 'header__list__active' : ''}`}>
                    {maxWidth > 768 ? items : itemsVisible}
                </ul>

            </div>
        </div>
    );
};

export default Header;