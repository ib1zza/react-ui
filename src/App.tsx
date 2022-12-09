import React, { useState } from "react";
import "./App.scss";
import s from "./UI/Modal/Modal.module.scss";
import { useModal } from "./hooks/useModal";
import Modal from "./UI/Modal";
import { AnimatePresence } from "framer-motion";
import NavMenu from "./UI/NavMenu/NavMenu";
function App() {
  const { isVisible, hideModal, showModal } = useModal();
  return (
    <div className="App">
      <NavMenu>
        <span>asd1</span>
        <span>asd2</span>
        <span>asd3</span>
      </NavMenu>
      {/*<button className={s.openModalBtn} onClick={showModal}>*/}
      {/*  ✨ Открыть окно*/}
      {/*</button>*/}
      {/*<AnimatePresence>*/}
      {/*  {isVisible && (*/}
      {/*    <Modal hideModal={hideModal}>*/}
      {/*      asdasd*/}
      {/*      <ul>*/}
      {/*        <li>*/}
      {/*          <div>*/}
      {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa*/}
      {/*            nam omnis reiciendis soluta? Consequatur cum dolore obcaecati*/}
      {/*            quaerat sint ullam. Cumque explicabo illo iure maxime natus*/}
      {/*            nisi quisquam, quod voluptates!*/}
      {/*          </div>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <div>*/}
      {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa*/}
      {/*            nam omnis reiciendis soluta? Consequatur cum dolore obcaecati*/}
      {/*            quaerat sint ullam. Cumque explicabo illo iure maxime natus*/}
      {/*            nisi quisquam, quod voluptates!*/}
      {/*          </div>*/}
      {/*        </li>{" "}*/}
      {/*        <li>*/}
      {/*          <div>*/}
      {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa*/}
      {/*            nam omnis reiciendis soluta? Consequatur cum dolore obcaecati*/}
      {/*            quaerat sint ullam. Cumque explicabo illo iure maxime natus*/}
      {/*            nisi quisquam, quod voluptates!*/}
      {/*          </div>*/}
      {/*        </li>{" "}*/}
      {/*        <li>*/}
      {/*          <div>*/}
      {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa*/}
      {/*            nam omnis reiciendis soluta? Consequatur cum dolore obcaecati*/}
      {/*            quaerat sint ullam. Cumque explicabo illo iure maxime natus*/}
      {/*            nisi quisquam, quod voluptates!*/}
      {/*          </div>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*      /!*<img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />*!/*/}
      {/*    </Modal>*/}
      {/*  )}*/}
      {/*</AnimatePresence>*/}
    </div>
  );
}

export default App;
