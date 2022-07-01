import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { setClosingMenu } from './../../redux/reducer';
import './headerLink.scss';

const HeaderLink = ({ path, label, img, src, alt }) => {
    const dispatch = useDispatch();
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });

    const closeMenu = () => {
        dispatch(setClosingMenu());
    }

    const linkClass = classNames({
        'header__link': true,
        [alt]: `${alt ? alt : ''}`,
        'active': match,
    });

    return (
        <li onClick={closeMenu} key={label}>
            <Link to={path} className={linkClass}>
                {label}
                {img ? <img className={`header__link-${alt}`} src={src} alt={alt} /> : null}
            </Link>
        </li>
    );
};

export default HeaderLink;