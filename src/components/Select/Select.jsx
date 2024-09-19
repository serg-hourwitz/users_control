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
  labelStyles,
  selectStyles,
  ...props
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 220, ...sx }}>
      <InputLabel
        id={`${label}-label`}
        sx={{
          fontFamily: 'var(--f-primary)',
          fontSize: 'var(--fs-extra-small)',
          fontWeight: 'var(--fw-reg)',
          ...labelStyles,
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
        sx={{
          fontFamily: 'var(--f-secondary)',
          fontSize: 'var(--fs-extra-small)',
          fontWeight: 'var(--fw-reg)',
        }}
        {...props}
      >
        {/* Render 'None' as a MenuItem directly */}
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {/* Render other options */}
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
