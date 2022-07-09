import { nanoid } from '@reduxjs/toolkit';
import { ICard, ICartItem } from '../types';

type RenderItemType = (arr: ICard[], Component: React.FC<ICartItem>, imgBlock?: boolean) => JSX.Element[];

export const renderItem: RenderItemType = (arr, Component, imgBlock = false) => {
    return arr.map(item => <Component key={nanoid()} {...item} imgBlock={imgBlock} />)
};