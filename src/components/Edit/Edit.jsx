import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import styles from './Edit.module.css';

const Edit = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Edit Users</h2>
      <form className={styles.form}>
        <FormControl style={{ width: 500, marginBottom: 60 }} margin="normal">
          <InputLabel id="user-select-label">User</InputLabel>
          <Select labelId="user-select-label" id="user-select">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* Add actual user options here */}
          </Select>
        </FormControl>

        <h3 className={styles.subtitle}>User Information</h3>
        <div className={styles.info}>
          <TextField
            style={{ width: 500, marginRight: 80, marginBottom: 80 }}
            margin="normal"
            variant="outlined"
            placeholder="Full Name"
          />

          <FormControl style={{ width: 500 }} margin="normal">
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select labelId="department-select-label" id="department-select">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="IT">Digital Marketing</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ width: 500, marginRight: 80 }} margin="normal">
            <InputLabel id="country-select-label"> Country</InputLabel>
            <Select labelId="country-select-label" id="country-select">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
              <MenuItem value="France">France</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="Japan">Japan</MenuItem>
              <MenuItem value="China">China</MenuItem>
              <MenuItem value="Brazil">Brazil</MenuItem>
            </Select>
          </FormControl>

          <FormControl style={{ width: 500 }} margin="normal">
            <InputLabel id="status-select-label">Status</InputLabel>
            <Select labelId="status-select-label" id="status-select">
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </div>
      </form>

      <div className={styles.footer}>
        <div className={styles.buttons}>
          <Button
            variant="outlined"
            color="error"
            style={{ width: 100, height: 48 }}
          >
            Undo
          </Button>
          <Button variant="contained" color="success" style={{ width: 200 }}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
