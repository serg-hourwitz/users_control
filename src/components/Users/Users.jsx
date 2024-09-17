import MultipleSelectCheckmarks from '../Checkbox/Checkbox';
import Country from '../Countries/Countries';
import Buttons from '../Buttons/Buttons';
import Status from '../Status/Status';
import BasicTable from '../Table/Table';
import DustBin from '../DustBin/DustBin';
import BasicModal from '../Modal/Modal'; // Import the Modal component
import { useState, useEffect } from 'react'; // Import useState and useEffect
import styles from './Users.module.css';

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal visibility
  const [users, setUsers] = useState([]);

  // Load users from localStorage when the component mounts
  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  // Save users to localStorage whenever the users state changes
  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, [users]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setIsModalOpen(false); // Close modal after adding the user
  };

  // Ensure modal is open when the page loads
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

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
        </form>

        <BasicTable users={users} setUsers={setUsers} />

        {/* Pass modal state and handlers to the BasicModal component */}
        <BasicModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          addUser={addUser}
        />
      </div>
    </div>
  );
};

export default Users;
