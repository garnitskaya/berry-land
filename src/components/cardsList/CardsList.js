import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDate } from '../../redux/reducer';
import Card from './../../components/card/Card';
import Spinner from './../spinner/Spinner';
import data from '../../card.json';
import { v4 as uuidv4 } from 'uuid';
import './cardsList.scss';

const CardsList = () => {
    const { cards, loading, error, activeFilter } = useSelector(state => state.mainSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDate(data.cards));
    }, []);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h2 className='title__error'>{error}</h2>
    }

    const filteredItems = (items, filter) => {
        if (filter === 'all') {
            return items;
        } else {
            return items.filter(item => item.group === activeFilter);
        }
    }

    const renderItem = (arr) => {
        return arr.map(item => <Card key={uuidv4()} {...item} />)
    };

    const element = renderItem(filteredItems(cards, activeFilter));

    return (
        <div className='cards-list'>
            {element}
        </div>
    );
};

export default CardsList;