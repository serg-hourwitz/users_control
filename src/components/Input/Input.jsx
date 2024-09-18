import { TextField } from '@mui/material';

const Input = ({ sx, placeholder, value, onChange }) => {
  return (
    <>
      <TextField
        sx={sx}
        id="outlined-basic"
        label="Full Name"
        margin="normal"
        variant="outlined"
        type="text"
        placeholder={placeholder}
        value={value || ''} // Ensure a defined value is passed
        onChange={onChange} // Pass the onChange handler
        InputLabelProps={{
          sx: {
            fontSize: 'var(--fs-less)', 
            fontWeight: 'var(--fw-reg)', 
            fontFamily: 'var(--f-primary)', 
          },
        }}
      />
    </>
  );
};

export default Input;
