import React, { ReactNode } from "react";
import Dialog, {DialogProps} from "@mui/material/Dialog";
import DialogContent from '@mui/material/DialogContent';
import Box from "@mui/material/Box";
import Button from "Components/Button";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  overflow: "scroll",
};

const styleCloseBtn = {
    position: 'absolute' as const,
    right: 8,
    top: 8,
    borderRadius: "50%",
    background: "#00000050",
    width: "50px",
    minWidth: "50px",
    height: "50px",
    zIndex: 2,
    color: 'white'
  };

export interface withMuiModalProps extends DialogProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;}

const withMuiModal = <P extends DialogProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: withMuiModalProps) => {
    return (
      <Dialog
        open={props.open}
        onClose={props.onClose}
        fullWidth={true}
        maxWidth={'xl'}
      >
            <Button color="inherit" onClick={props.onClose} style={styleCloseBtn}>
               <CloseIcon/>
            </Button>

            <DialogContent>{props.children}</DialogContent>
      </Dialog>
    );
  };
};

export default withMuiModal;
