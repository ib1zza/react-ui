import { useState } from "react";

export function useModal(initialValue = false) {
  const [isVisible, setIsVisible] = useState(initialValue);

  const hideModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);
  const toggleModal = () => setIsVisible(!isVisible);

  return { hideModal, showModal, toggleModal, isVisible };
}
