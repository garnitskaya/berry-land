import { useSelector, useDispatch } from 'react-redux';
import { filtersChanged } from '../../store/mainSlice';
import './itemFilter.scss';

const ItemFilter = () => {
    const { activeFilter } = useSelector(state => state.mainSlice);
    const dispatch = useDispatch();

    const btns = [
        { value: 'all', label: 'Все продукты' },
        { value: 'berries', label: 'Ягоды' },
        { value: 'superfood', label: 'Суперфуд' },
    ]

    const onFiltersChanged = (value) => {
        dispatch(filtersChanged(value));
    }

    const items = btns.map(({ value, label }) => {
        const isActive = value === activeFilter;
        const activeClass = isActive ? 'active' : '';
        return (
            <div
                onClick={() => onFiltersChanged(value)}
                className={`filter__btn ${activeClass}`}
                key={value}>
                {label}
            </div>
        )
    })

    return (
        <div className='filter'>
            <div className='filter__wrap'>
                {items}
            </div>
        </div>
    );
};

export default ItemFilter;