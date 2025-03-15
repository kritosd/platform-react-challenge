import React from "react";
import withMuiDropdown, {withMUISelectProps as BaseButtonsProps} from 'HOC/withMuiDropdown';

export interface SelectProps extends BaseButtonsProps {
}

const DropDown = (props: SelectProps) => {
  return (
    <select value={props.value} onChange={props.onChange}>
      {props.values.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default withMuiDropdown(DropDown);
