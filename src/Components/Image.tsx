import React from "react";
import withMuiCardMedia, {withMuiCardMediaProps as BaseCardProps} from "HOC/withMuiCardMedia";


interface ImageProps extends BaseCardProps {
    url: string;
}

const Image = (props: ImageProps) => {
  return (
      <img src={props.url} style={{width: '100%'}}/>
  );
};

export default withMuiCardMedia(Image);
