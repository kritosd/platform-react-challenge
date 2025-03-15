import React from "react";
import CardMedia, { CardMediaProps } from "@mui/material/CardMedia";

export interface withMuiCardMediaProps extends CardMediaProps {
  url: string;
}

const withMuiCardMedia = <P extends CardMediaProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & withMuiCardMediaProps) => {
    return (
      <CardMedia sx={{ boxShadow: 3 }} component="img" loading="lazy" image={props.url}>
        {props.children}
      </CardMedia>
    );
  };
};

export default withMuiCardMedia;
