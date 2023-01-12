import { BannerBlock, ItemFilter, CardsList, Cart } from "../../components";

import "./cardsPage.scss";

const CardsPage = () => {
  return (
    <>
      <BannerBlock />
      <ItemFilter />
      <div className="cards-page">
        <div className="container">
          <div className="cards-page__wrap">
            <CardsList />
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsPage;
