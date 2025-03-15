import React, {ReactNode} from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";

export interface withMUIButtonProps extends ButtonProps {
  children?: ReactNode;
}

const withMuiButton = <P extends withMUIButtonProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: withMUIButtonProps) => {
    return (
        <MuiButton {...props} sx={props.style}>{props.children}</MuiButton>
    );
  };
};

export default withMuiButton;
