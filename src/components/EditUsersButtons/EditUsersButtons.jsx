import Buttons from '../Buttons/Buttons';
import styles from './EditUsersButtons.module.css';

const EditUsersButtons = ({ onUndo, onSave }) => {
  return (
    <div className={styles.buttons}>
      <Buttons
        variant="outlined"
        color="error"
        sx={{
          width: 100,
          height: 48,
          fontSize: 'var(--fs-extra-small)',
          fontWeight: 'var(--fw-light)',
          textTransform: 'none',
          fontFamily: 'var(--f-primary)',
        }}
        title="Undo"
        onClick={onUndo} // Attach the Undo handler
      />

      <Buttons
        variant="outlined"
        color="success"
        sx={{
          width: 200,
          fontSize: 'var(--fs-extra-small)',
          fontWeight: 'var(--fw-light)',
          textTransform: 'none',
          fontFamily: 'var(--f-primary)',
        }}
        title="Save"
        onClick={onSave} // Attach the Save handler
      />
    </div>
  );
};

export default EditUsersButtons;
