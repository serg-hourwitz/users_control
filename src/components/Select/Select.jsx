import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({
  value,
  label,
  options = [],
  onChange,
  sx,
  ...props
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 220, ...sx }}>
      <InputLabel
        id={`${label}-label`}
        sx={{
          fontFamily: 'var(--f-primary)',
          fontSize: 'var(--fs-less)',
          fontWeight: 'var(--fw-reg)',
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={onChange}
        {...props}
      >
        {options.length === 0 && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
