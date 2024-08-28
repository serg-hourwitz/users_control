import Buttons from '../Buttons/Buttons';
import styles from './EditUsersButtons.module.css';

const EditUsersButtons = () => {
  return (
    <div className={styles.buttons}>
      <Buttons
        variant="outlined"
        color="error"
        sx={{ width: 100, height: 48 }}
        title="Undo"
      />
      <Buttons
        variant="outlined"
        color="success"
        sx={{ width: 200 }}
        title="Save"
      />
    </div>
  );
}

export default EditUsersButtons;