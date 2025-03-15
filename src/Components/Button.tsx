import React from "react";
import withMUIButton, {withMUIButtonProps as BaseButtonsProps} from 'HOC/withMuiButton';

export interface ButtonProps extends BaseButtonsProps {
  style?: React.CSSProperties
}

const Button = (props: ButtonProps) => {

  return (
    <button {...props}>{props.children}</button>
  );
};

export default withMUIButton(Button);
