import React from "react";
import withMuiCard, {withMuiCardProps as baseCardProps } from 'HOC/withMuiCard';

interface CardProps extends baseCardProps {
  onClick?: () => any
}

const Card = (props: CardProps) => {

  return (
    <section onClick={props.onClick}>
    </section>
  );
};

export default withMuiCard(Card);
