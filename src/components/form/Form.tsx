import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Button, Modal, Field } from "..";
import { useInput, useAppDispatch, useAppSelector } from "./../../hooks";
import { postDate, setVisibleModal } from "../../store/mainSlice";
import { IData } from "../../types";

import "./form.scss";

const Form = () => {
  const name = useInput("", { isEmpty: true });
  const number = useInput("", { isEmpty: true });
  const email = useInput("", { isEmpty: true });
  const { itemsInCart } = useAppSelector((state) => state.mainSlice);
  const dispatch = useAppDispatch();

  const clearInputs = (): void => {
    name.setEmptyValue();
    number.setEmptyValue();
    email.setEmptyValue();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (
      name.valueValid &&
      number.valueValid &&
      email.valueValid &&
      itemsInCart.length > 0
    ) {
      const data: IData = {
        id: nanoid(),
        user: name.value,
        number: number.value,
        email: email.value,
        itemsInCart,
      };
      console.log(data);
      dispatch(postDate(data));
      clearInputs();
      showModal();
    }
  };

  const showModal = (): void => {
    dispatch(setVisibleModal(true));
    localStorage.clear();
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
            <Field {...name} type={"text"} placeholder="ФИО" name="name" />
            <Field
              {...number}
              type={"text"}
              placeholder="Телефон"
              name="number"
            />
            <Field
              {...email}
              type={"text"}
              placeholder="Эл. почта"
              name="email"
            />
          </div>
          <Button color="green" children="Заказать" type="submit" />
        </form>
      </div>
      <Modal />
    </>
  );
};

export default Form;
