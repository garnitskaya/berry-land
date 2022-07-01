import { useEffect, useRef } from 'react';
import { setMaxWidth } from '../../store/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import HeaderLink from '../headerLink/HeaderLink';
import Hamburger from '../hamburger/Hamburger';
import HeaderLinkCart from './../headerLinkCart/HeaderLinkCart';
import logo from '../../resources/icons/logo-icon.png';
import flag from '../../resources/icons/israel-flag-icon.png';
import './header.scss';

const Header = () => {
    const { openMenu, maxWidth } = useSelector(state => state.mainSlice);
    const dispatch = useDispatch();
    const ref = useRef();

    const resizeHandler = () => {
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

    const link = [
        { path: './', label: 'Иврит', img: true, src: `${flag}`, alt: 'flag', visible: true },
        { path: './all', label: 'Все продукты', visible: true },
        { path: './recipes', label: 'Рецепты', visible: true },
        { path: './all', label: '', img: true, src: `${logo}`, alt: 'logo', visible: false },
        { path: './delivery', label: 'Доставка', visible: true },
        { path: './payment', label: 'Оплата', visible: true },
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