import React, { ReactNode } from "react";
import Select, { BaseSelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export interface withMUISelectProps extends BaseSelectProps {
    values: any[]
    value: any
    onChange: (e: any) => any
  children?: ReactNode;
}

const withMuiDropdown = <P extends withMUISelectProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: withMUISelectProps) => {
    return (
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.value}
        onChange={props.onChange}
      >
        {props.values.map((item) =>
        <MenuItem key={item} value={item}>{item}</MenuItem>
        )}
      </Select>
    );
  };
};

export default withMuiDropdown;
