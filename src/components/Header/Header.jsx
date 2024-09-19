import { Button } from '@mui/material';
import styles from './Header.module.css';

const Header = ({ onEditClick, onUsersClick }) => {
  return (
    <div className={styles.header}>
      <div className={styles.buttons}>
        <Button
          variant="outlined"
          style={{
            width: 200,
            height: 48,
            fontFamily: 'var(--f-primary)',
            fontSize: 'var(--fs-extra-small)',
            fontWeight: 'var(--fw-light)',
            textTransform: 'none',
          }}
          onClick={onEditClick}
        >
          Edit Users
        </Button>
        <Button
          variant="outlined"
          style={{
            width: 200,
            height: 48,
            fontFamily: 'var(--f-primary)',
            fontSize: 'var(--fs-extra-small)',
            fontWeight: 'var(--fw-light)',
            textTransform: 'none',
          }}
          onClick={onUsersClick}
        >
          Users
        </Button>
      </div>
    </div>
  );
};

export default Header;
