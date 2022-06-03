import Cart from './../../components/cart/Cart';
import CardsList from '../../components/cardsList/CardsList';
import BannerBlock from '../../components/bannerBlock/BannerBlock';
import ItemFilter from '../../components/itemFilter/ItemFilter';
import './cardsPage.scss';

const CardsPage = () => {
    return (
        <>
            <BannerBlock />
            <ItemFilter />
            <div className='cards-page'>
                <div className='container'>
                    <div className='cards-page__wrap'>
                        <CardsList />
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardsPage;