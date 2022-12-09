import { motion } from "framer-motion";
import React, { useEffect } from "react";
import s from "./Modal.module.scss";

interface ModalProps {
  hideModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ hideModal, children }) => {
  return (
    <motion.div className={s.overlay} onClick={hideModal}>
      <motion.div
        className={s.modal}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.5 }}
      >
        <svg height="200" viewBox="0 0 200 200" width="200" onClick={hideModal}>
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
