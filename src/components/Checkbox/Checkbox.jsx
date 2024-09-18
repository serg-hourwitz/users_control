import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { forwardRef, useImperativeHandle } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Digital Marketing', 'HR', 'Finance'];

// Use forwardRef to pass a ref to the component
const MultipleSelectCheckmarks = forwardRef((props, ref) => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // UseImperativeHandle allows the parent to access the method
  useImperativeHandle(ref, () => ({
    clearSelections() {
      setPersonName([]); // Clear the selected items
    },
  }));

  return (
    <div>
      <FormControl sx={{ m: 0, width: 220 }}>
        <InputLabel
          id="demo-multiple-checkbox-label"
          sx={{
            fontFamily: 'var(--f-primary)',
            fontSize: 'var(--fs-less)',
            fontWeight: 'var(--fw-reg)',
          }}
        >
          Selected
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Selected" />}
          renderValue={() => `Selected (${personName.length})`}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});

export default MultipleSelectCheckmarks;
