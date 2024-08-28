import MultipleSelectCheckmarks from '../Checkbox/Checkbox';
import Country from '../Countries/Countries';
import Buttons from '../Buttons/Buttons';
import Status from '../Status/Status';
import BasicTable from '../Table/Table';
import DustBin from '../DustBin/DustBin';
import styles from './Users.module.css';

const Users = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>USERS</h2>
      <div className={styles.container}>
        <form className={styles.form}>
          <MultipleSelectCheckmarks />

          <Country label="Select country" />

          <Status label="All Statuses" />

          <div className={styles.dustbin}>
            <DustBin />
          </div>
          <Buttons
            variant="outlined"
            color="success"
            sx={{ width: 150, height: 56, marginLeft: 'auto' }}
            title="Add User"
          />
        </form>
        <BasicTable />
      </div>
    </div>
  );
};

export default Users;
