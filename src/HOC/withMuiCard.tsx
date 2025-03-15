import React from "react";
import Card, { CardProps } from "@mui/material/Card";

export interface withMuiCardProps extends CardProps {}

const withMuiCard = <P extends CardProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & withMuiCardProps) => {
    return <Card sx={{ boxShadow: 3 }} {...props} >
          {props.children}
      </Card>;
  };
};

export default withMuiCard;
