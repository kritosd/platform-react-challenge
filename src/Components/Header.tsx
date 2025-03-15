import * as React from "react";
import withMuiHeader, {
  withMuiHeaderProps as BaseHeaderProps,
} from "HOC/withMuiHeader";

const Header = (props: BaseHeaderProps) => {
  return <header {...props}>{props.children}</header>;
};
export default withMuiHeader(Header);
