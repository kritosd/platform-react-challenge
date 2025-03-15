import React from "react";
import MuiContainer, { ContainerProps } from "@mui/material/Container";

const style = { display: "grid", gap: "10px", justifySelf: 'center',margin: 0, padding: 0 };

export interface withMuiContainerProps extends ContainerProps {}

const withMuiContainer = <P extends withMuiContainerProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    return (
      <MuiContainer sx={style} {...props}>
        {props.children}
      </MuiContainer>
    );
  };
};

export default withMuiContainer;
