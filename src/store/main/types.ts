export interface ICard {
  id: number;
  name: string;
  img: string;
  price: string;
  newPrice?: string;
  quantity: number;
  group: string;
}

export type ActiveFilterType = "" | "superfood" | "berries";

export interface MainState {
  cards: ICard[];
  card: ICard;
  loading: boolean;
  error: null | string;
  activeFilter: ActiveFilterType;
  openMenu: boolean;
  visibleModal: boolean;
}

export interface IHeaderLink {
  path: string;
  label: string | JSX.Element;
  img?: boolean;
  src?: string;
  alt: string;
  visible: boolean
}

export interface ICartItem extends ICard {
  imgBlock?: boolean;
}
export interface IData {
  id: string;
  user: string;
  number: string;
  email: string;
  cards: ICard[];
  totalPrice:string;
}