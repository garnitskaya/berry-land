import { useAppSelector } from "../../hooks";

import "./modal.scss";

const Modal = () => {
  const visibleModal = useAppSelector((state) => state.mainSlice.visibleModal);

  return (
    <div className={`${visibleModal ? "modal active" : "modal"}`}>
      <h2 className="modal__title">Cпасибо за заказ!</h2>
    </div>
  );
};

export default Modal;
