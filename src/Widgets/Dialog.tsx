import React from "react";
import { useModal } from "Context/ModalContext";
import Modal from "Components/Modal";

interface DialogProps {}

const Dialog = (props: DialogProps) => {
  const { isOpen, closeModal, content } = useModal();
  return <Modal open={isOpen} onClose={() => closeModal()}>
    {content}
  </Modal>;
};

export default Dialog;
