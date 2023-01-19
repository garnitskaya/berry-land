import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames";

import { Button, OrderBlock, Spinner, WrapBlock } from "..";
import { useAppDispatch, useAppSelector } from "./../../hooks";
import { fetchDateItem } from "../../store/main/asyncActions";

import "./cardItem.scss";

const CardItem = () => {
  const { card, loading, error } = useAppSelector((state) => state.main);
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { name, img, price, newPrice } = card;

  useEffect(() => {
    dispatch(fetchDateItem(Number(id)));
  }, [id]);

  const goBack = () => navigate(-1);

  return (
    <div className="container">
      {error ? (
        <h2 className="title__error">{error}</h2>
      ) : loading ? (
        <Spinner />
      ) : (
        <>
          <WrapBlock
            title={name}
            cl={classNames("card-item", { "card-item__sale": newPrice })}
          >
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
                  <span
                    className={classNames({ "card-item__price-old": newPrice })}
                  >
                    {price}₪
                  </span>
                  за 2.5 кг
                </div>
                <OrderBlock card={card} obj />
              </div>
            </div>
          </WrapBlock>
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
