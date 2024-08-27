import {TextField } from '@mui/material';

const Input = ({sx, placeholder}) => {
  return (
    <>
      <TextField
        sx={sx}
        id="outlined-basic"
        label="Full Name"
        margin="normal"
        variant="outlined"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
