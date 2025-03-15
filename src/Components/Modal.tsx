import React, { ReactNode } from "react";
import Button from "Components/Button";
import withMuiModal, {
  withMuiModalProps as BaseModalProps,
} from "HOC/withMuiModal";

interface ModalProps extends BaseModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        background: "#00000060",
        padding: "20px",
        color: "white",
        overflow: "scroll",
      }}
    >
      <div className="dialog" style={{ background: "white" }}>
        <div className="dialog-header">
          <Button onClick={onClose}>Close</Button>
        </div>
        <div className="dialog-content">{children}</div>
        <div className="dialog-footer"></div>
      </div>
    </div>
  );
};

export default withMuiModal(Modal);
