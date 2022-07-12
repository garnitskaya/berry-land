import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { setClosingMenu } from '../../store/mainSlice';
import { IHeaderLink } from '../../types';

import './headerLink.scss';

const HeaderLink: React.FC<IHeaderLink> = ({ path, label, img, src, alt }) => {
    const dispatch = useAppDispatch();
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
        <li onClick={closeMenu}>
            <Link to={path} className={linkClass}>
                {label}
                {img ? <img className={`header__link-${alt}`} src={src} alt={alt} /> : null}
            </Link>
        </li>
    );
};

export default HeaderLink;