import React, { useEffect } from "react";
import s from "./Modal.module.scss";

interface ModalProps {
  isVisible: boolean;
  hideModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ hideModal, isVisible, children }) => {
  return (
    <div
      className={s.overlay + " " + s.animated + " " + (isVisible ? s.show : "")}
      onClick={hideModal}
    >
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <svg height="200" viewBox="0 0 200 200" width="200" onClick={hideModal}>
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children}
      </div>
    </div>
  );
};

export default Modal;
