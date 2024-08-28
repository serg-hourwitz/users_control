import Country from '../Countries/Countries';
import Department from '../Department/Department';
import Status from '../Status/Status';
import User from '../User/User';
import Input from '../Input/Input';
import EditUsersButtons from '../EditUsersButtons/EditUsersButtons';
import styles from './Edit.module.css';

const Edit = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Edit Users</h2>
      <form className={styles.form}>
        <User label="User" sx={{ width: 500, m: 0 }} />
        <h3 className={styles.subtitle}>User Information</h3>
        <div className={styles.info}>
          <Input sx={{ width: 500, m: 0 }} />

          <Department label="Department" sx={{ width: 500, m: 0 }} />

          <Country label="Country" sx={{ width: 500, m: 0 }} />

          <Status label="Status" sx={{ width: 500, m: 0 }} />
        </div>
      </form>

      <div className={styles.footer}>
        <EditUsersButtons />
      </div>
    </div>
  );
};

export default Edit;
