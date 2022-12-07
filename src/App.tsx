import React, { useState } from "react";
import "./App.scss";
import s from "./UI/Modal/Modal.module.scss";
import { useModal } from "./hooks/useModal";
import Modal from "./UI/Modal";

function App() {
  const { isVisible, hideModal, showModal } = useModal();
  return (
    <div className="App">
      <button className={s.openModalBtn} onClick={showModal}>
        ✨ Открыть окно
      </button>
      <Modal isVisible={isVisible} hideModal={hideModal}>
        asdasd
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Modal>
    </div>
  );
}

export default App;
