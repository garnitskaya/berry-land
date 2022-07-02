import { v4 as uuidv4 } from 'uuid';
import { ICard, ICartItem } from '../types';

type RenderItemType = (arr: ICard[], Component: React.FC<ICartItem>, imgBlock?: boolean) => JSX.Element[];

export const renderItem: RenderItemType = (arr, Component, imgBlock = false) => {
    return arr.map(item => <Component key={uuidv4()} {...item} imgBlock={imgBlock} />)
};