import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const User = () => {
  return (
    <FormControl style={{ width: 500, marginBottom: 60 }} margin="normal">
      <InputLabel id="user-select-label">User</InputLabel>
      <Select labelId="user-select-label" id="user-select">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {/* Add actual user options here */}
      </Select>
    </FormControl>
  );
};

export default User;
