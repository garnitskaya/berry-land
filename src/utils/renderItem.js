import { v4 as uuidv4 } from 'uuid';

export const renderItem = (arr, Component, imgBlock = false) => {
    return arr.map(item => <Component key={uuidv4()} {...item} imgBlock={imgBlock} />)
};