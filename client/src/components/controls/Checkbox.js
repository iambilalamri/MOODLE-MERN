import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import React from "react";

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            value={value}
            onChange={(e) => {
              onChange({ target: { name, value: e.target.checked } });
            }}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
