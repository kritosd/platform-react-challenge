import React from "react";
import AppBar, { AppBarProps } from "@mui/material/AppBar";

export interface withMuiHeaderProps extends AppBarProps {}

const withMuiHeader = <P extends withMuiHeaderProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & withMuiHeaderProps) => {
    return (
      <AppBar position="sticky" {...props}>
        {props.children}
      </AppBar>
    );
  };
};

export default withMuiHeader;
