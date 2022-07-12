import { ICard, IDataForCart } from '../types';

type ItemsCartType = (cards: ICard[], dataForCart: IDataForCart[]) => any[];

interface ItemObjType {
    [key: string]: number;
}

export const itemsCart: ItemsCartType = (cards, dataForCart) => {
    const itemObj: ItemObjType = {};

    for (let i = 0; i < dataForCart.length; ++i) {
        let key = dataForCart[i].id
        let value = +dataForCart[i].quantity

        if (itemObj[key]) {
            itemObj[key] += value;
        } else {
            itemObj[key] = value;
        }
    }
    const itemsInCart = cards.map(card => {
        for (const key in itemObj) {
            if (card.id == +key) {
                return { ...card, quantity: itemObj[key] };
            }
        }
    })
        .filter(item => item);

    return itemsInCart as ICard[];
}