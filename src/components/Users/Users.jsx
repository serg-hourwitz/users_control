import MultipleSelectCheckmarks from '../Checkbox/Checkbox';
import Country from '../Countries/Countries';
import styles from './Users.module.css';
import {
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const Users = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>USERS</h2>
      <form className={styles.form}>
        <MultipleSelectCheckmarks />
        <Country label='Select country'/>
        
        <FormControl sx={{ width: 220 }}>
          <InputLabel id="status-select-label">All Statuses</InputLabel>
          <Select
            labelId="status-select-label"
            id="status-select"
            sx={{ height: 48 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
        <div className={styles.dustbin}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V7H2V5H22V7H20ZM6 7V20H18V7H6ZM7 2H17V4H7V2Z"
              fill="#5E626B"
            />
          </svg>
        </div>
        <Button
          variant="outlined"
          color="success"
          style={{ width: 150, height: 48, marginLeft: 'auto' }}
        >
          Add User
        </Button>
      </form>
    </div>
  );
};

export default Users;
