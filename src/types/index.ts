export interface ICard{
    id:number;
    name:string;
    img:string;
    price: string;
    newPrice?: string;
    quantity:number;
    group:string;
}

export interface IDataForCart{
    id:number;
    quantity:number;
}

export interface MainState{
    cards: ICard[];
    loading: boolean;
    error: null | string;
    dataForCart: IDataForCart[];
    itemsInCart: ICard[];
    activeFilter: string;
    filteredItems: any[];
    maxWidth: number;
    openMenu: boolean;
}

export interface IHeaderLink{
    path: string;
    label: string|JSX.Element;
    img?: boolean;
    src?: string;
    alt: string;
    visible:boolean
}

export interface ICartItem extends ICard{
    imgBlock?: boolean;
}