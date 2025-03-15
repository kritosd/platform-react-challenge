import React from "react";
import ListItemButton, {ListItemButtonProps} from '@mui/material/ListItemButton';

const style = {
  cursor: 'pointer'
}

export interface withMuiListItemProps extends ListItemButtonProps {}

const withMuiListItem = <P extends withMuiListItemProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: withMuiListItemProps) => {
    return <ListItemButton selected {...props} sx={{...style, ...props.style}}>{props.children}</ListItemButton>;
  };
};

export default withMuiListItem;
