import { useAppSelector } from "../../hooks";

import "./modal.scss";

const Modal = ({ children }: any) => {
  const visibleModal = useAppSelector((state) => state.main.visibleModal);

  return (
    <div className={`${visibleModal ? "modal active" : "modal"}`}>
      <h2 className="modal__title">{children}</h2>
    </div>
  );
};

export default Modal;
