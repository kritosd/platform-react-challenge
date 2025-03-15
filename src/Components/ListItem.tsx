import React, { memo } from "react";
import withMuiListItem, {withMuiListItemProps as BaseListItemProps} from 'HOC/withMuiListItem';

export interface ListItemProps extends BaseListItemProps {
    children?: React.ReactNode;
}

const ListItem = memo((props: ListItemProps) => {

  return (
    <div {...props}>{props.children}</div>
  );
});

export default withMuiListItem(ListItem);
