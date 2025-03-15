import React from "react";
import withMuiContainer, {withMuiContainerProps as BaseContainerProps} from 'HOC/withMuiContainer';

interface ContainerProps extends BaseContainerProps {
    children: React.ReactNode;
}

const Container = (props: ContainerProps) => {

  return (
    <div {...props}>{props.children}</div>
  );
};

export default withMuiContainer(Container);
