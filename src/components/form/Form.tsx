import { nanoid } from "@reduxjs/toolkit";

import { Button, Modal, Field } from "..";
import { useInput, useAppDispatch, useAppSelector } from "./../../hooks";
import { setVisibleModal } from "../../store/main/slice";
import { postDate } from "../../store/main/asyncActions";
import { clearItems } from "../../store/cart/slice";
import { IData } from "../../store/main/types";

import "./form.scss";

const Form = () => {
  const name = useInput("", { isEmpty: true });
  const number = useInput("", { isEmpty: true });
  const email = useInput("", { isEmpty: true });
  const { cards, totalPrice } = useAppSelector((state) => state.cart);
  const { error } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  const clearInputs = (): void => {
    name.setEmptyValue();
    number.setEmptyValue();
    email.setEmptyValue();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const data: IData = {
      id: nanoid(),
      user: name.value,
      number: number.value,
      email: email.value,
      cards,
      totalPrice
    };

    console.log(data);
    dispatch(postDate(data));
    dispatch(clearItems());
    clearInputs();
    showModal();
  };

  const showModal = (): void => {
    dispatch(setVisibleModal(true));
    setTimeout(() => {
      dispatch(setVisibleModal(false));
    }, 2500);
  };

  return (
    <>
      <div className="form">
        <h2 className="form__title">Контактные данные</h2>
        <form className="form__block" onSubmit={handleSubmit}>
          <div className="form__items">
            <Field
              {...name}
              type="text"
              placeholder="ФИО"
              name="name" />
            <Field
              {...number}
              type="tel"
              placeholder="Телефон"
              name="number" />
            <Field
              {...email}
              type="email"
              placeholder="Эл. почта"
              name="email"
            />
          </div>
          <Button
            color="green"
            children="Заказать"
            type="submit"
            disabled={
              !name.valueValid ||
              !number.valueValid ||
              !email.valueValid ||
              cards.length === 0
            }
          />
        </form>
      </div>
      <Modal>{error ? error : 'Cпасибо за заказ!'}</Modal>
    </>
  );
};

export default Form;
