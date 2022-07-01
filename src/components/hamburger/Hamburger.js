import { useDispatch, useSelector } from 'react-redux';
import { setOpeningMenu } from '../../store/mainSlice';
import './hamburger.scss';

const Hamburger = () => {
    const { openMenu } = useSelector(state => state.mainSlice);
    const dispatch = useDispatch();

    const onOpenMenu = () => {
        dispatch(setOpeningMenu())
    }

    return (
        <div className={`hamburger ${openMenu ? 'hamburger__active' : ''}`}
            onClick={onOpenMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Hamburger;