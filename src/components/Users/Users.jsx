import MultipleSelectCheckmarks from '../Checkbox/Checkbox';
import Country from '../Countries/Countries';
import Buttons from '../Buttons/Buttons';
import Status from '../Status/Status';
import BasicTable from '../Table/Table';
import DustBin from '../DustBin/DustBin';
import BasicModal from '../Modal/Modal';
import { useState, useRef, useEffect } from 'react';
import styles from './Users.module.css';

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [users, setUsers] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(''); // State for Country
  const [selectedStatus, setSelectedStatus] = useState(''); // State for Status

  const multipleSelectRef = useRef(null); // Ref for MultipleSelectCheckmarks

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

  const handleOpenModal = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const handleReset = () => {
    setSelectedCountry(''); // Clear country selection
    setSelectedStatus(''); // Clear status selection
    if (multipleSelectRef.current) {
      multipleSelectRef.current.clearSelections(); // Clear multiple select checkmarks
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>USERS</h2>
      <div className={styles.container}>
        <form className={styles.form}>
          <MultipleSelectCheckmarks ref={multipleSelectRef} />{' '}
          {/* Ref to clear selections */}
          <Country
            label="Select country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          />
          <Status
            label="All Statuses"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          />
          <div className={styles.dustbinBlock}>
            <DustBin onClick={handleReset} /> {/* Reset selections on click */}
          </div>
          <Buttons
            variant="outlined"
            color="success"
            sx={{
              width: 150,
              height: 56,
              marginLeft: 'auto',
              fontFamily: 'var(--f-primary)',
              fontSize: 'var(--fs-extra-small)',
              fontWeight: 'var(--fw-light)',
              textTransform: 'none',
              '@media (max-width: 1500px)': {
                marginLeft: 0,
              },
            }}
            title="Add User"
            onClick={handleOpenModal} // Open modal on button click
          />
        </form>

        <BasicTable users={users} setUsers={setUsers} />

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
