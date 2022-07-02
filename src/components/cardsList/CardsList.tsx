import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { fetchDate } from '../../store/mainSlice';
import { ICard } from '../../types';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';
import data from '../../card.json';
import { v4 as uuidv4 } from 'uuid';

import './cardsList.scss';

type FilteredItemsType = (items: ICard[], filter: string) => ICard[];
type RenderItemType = (arr: ICard[]) => JSX.Element[];

const CardsList: React.FC = () => {
    const { cards, loading, error, activeFilter } = useAppSelector(state => state.mainSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDate(data.cards));
    }, []);

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <h2 className='title__error'>{error}</h2>
    }

    const filteredItems: FilteredItemsType = (items, filter) => {
        if (filter === 'all') {
            return items;
        } else {
            return items.filter(item => item.group === activeFilter);
        }
    }

    const renderItem: RenderItemType = (arr) => {
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