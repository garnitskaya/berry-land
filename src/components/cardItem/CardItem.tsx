import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button, OrderBlock, Spinner } from "..";
import {
  useAppDispatch,
  useAppSelector,
  useUpdateItemInCart,
} from "./../../hooks";
import { fetchDateItem } from "../../store/mainSlice";

import "./cardItem.scss";

const CardItem = () => {
  const { card, cards, dataForCart, loading, error } = useAppSelector((state) => state.mainSlice);
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { name, img, price, newPrice, quantity } = card;

  useEffect(() => {
    dispatch(fetchDateItem(Number(id)));
  }, []);

  useUpdateItemInCart(cards, dataForCart);

  const goBack = () => navigate(-1);

  return (
    <div className="container">
      {error && <h2 className="title__error">{error}</h2>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className={`card-item ${newPrice ? "card-item__sale" : null}`}>
            <h2 className="card-item__title">{name}</h2>
            <div className="card-item__block">
              <img className="card-item__img" src={img} alt={name} />
              <div className="card-item__prices">
                <p className="card-item__text">
                  Далеко-далеко за словесными, горами в стране гласных и
                  согласных живут рыбные тексты. Она большого необходимыми
                  переулка путь текста снова ему на берегу текстов прямо домах
                  бросил даль, если, которой мир. Маленький, образ. Не?
                </p>
                <div className="card-item__price">
                  {newPrice ? (
                    <span className="card-item__price-new">{newPrice}₪</span>
                  ) : null}
                  <span className={newPrice ? "card-item__price-old" : ""}>
                    {price}₪
                  </span>
                  за 2.5 кг
                </div>
                <OrderBlock id={Number(id)} quantity={quantity} />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            children="назад"
            color="green"
            onClick={goBack}
            style={{ marginTop: "20px" }}
          />
        </>
      )}
    </div>
  );
};

export default CardItem;
