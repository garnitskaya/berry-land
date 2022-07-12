import { FormEvent } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useInput } from '../../hooks/useInput';
import { useAppDispatch, useAppSelector } from './../../hooks/useTypedSelector';
import { postDate, setResettingCart, setVisibleModal } from '../../store/mainSlice';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import Field from './../field/Field';
import { IData } from '../../types';

import './form.scss';

const Form = () => {
    const name = useInput("", { isEmpty: true });
    const number = useInput("", { isEmpty: true });
    const email = useInput("", { isEmpty: true });
    const { itemsInCart } = useAppSelector(state => state.mainSlice);
    const dispatch = useAppDispatch();


    const clearInputs = (): void => {
        name.setEmptyValue();
        number.setEmptyValue();
        email.setEmptyValue();
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (name.valueValid && number.valueValid && email.valueValid && itemsInCart.length > 0) {
            const data: IData = {
                id: nanoid(),
                user: name.value,
                number: number.value,
                email: email.value,
                itemsInCart
            }
            console.log(data);
            dispatch(postDate(data));
            clearInputs();
        }
    }

    const showModal = (): void => {
        if (name.valueValid && number.valueValid && email.valueValid && itemsInCart.length > 0) {
            dispatch(setVisibleModal(true));
            setTimeout(() => {
                dispatch(setVisibleModal(false));
                dispatch(setResettingCart())
            }, 2500);
        }
    }

    return (
        <div className="form" >
            <h2 className="form__title" >Контактные данные</h2>
            <form className="form__block" onSubmit={handleSubmit}>
                <div className='form__items'>
                    <Field {...name} type={"text"} placeholder="ФИО" name="name" />
                    <Field {...number} type={"text"} placeholder="Телефон" name="number" />
                    <Field {...email} type={"text"} placeholder="Эл. почта" name="email" />
                </div>
                <Button onClick={showModal} type='green' children='Заказать' />
                <Modal />
            </form>
        </div>
    );
};

export default Form;