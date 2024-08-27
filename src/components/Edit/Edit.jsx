import Country from '../Countries/Countries';
import Department from '../Department/Department';
import Status from '../Status/Status';
import User from '../User/User';
import Input from '../Input/Input';
import { Button } from '@mui/material';
import styles from './Edit.module.css';

const Edit = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Edit Users</h2>
      <form className={styles.form}>
        <User />
        <h3 className={styles.subtitle}>User Information</h3>
        <div className={styles.info}>
          <Input sx={{ width: 500 }} />

          <Department label="Department" sx={{ width: 500 }} />

          <Country label="Country" sx={{ width: 500 }} />

          <Status label="Status" sx={{ width: 500 }} />
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
          <Button variant="outlined" color="success" style={{ width: 200 }}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
