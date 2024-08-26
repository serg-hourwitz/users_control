import { Button } from '@mui/material';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.buttons}>
        <Button variant="outlined" style={{ width: 200, height: 48 }}>
          Edit Users
        </Button>
        <Button variant="outlined" style={{ width: 200, height: 48 }}>
          Users
        </Button>
      </div>
    </div>
  );
};

export default Header;
