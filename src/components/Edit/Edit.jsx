import React, { useState, useEffect } from 'react';
import Country from '../Countries/Countries';
import Department from '../Department/Department';
import Status from '../Status/Status';
import User from '../User/User';
import Input from '../Input/Input';
import EditUsersButtons from '../EditUsersButtons/EditUsersButtons';
import styles from './Edit.module.css';

const Edit = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load users from localStorage
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    if (selectedUser) {
      // Set form fields based on selected user
      setName(selectedUser.name);
      setDepartment(selectedUser.department);
      setCountry(selectedUser.country);
      setStatus(selectedUser.status);
    }
  }, [selectedUser]);

  const handleUndo = () => {
    // Clear the form fields and deselect user
    setSelectedUser(null);
    setName('');
    setDepartment('');
    setCountry('');
    setStatus('');
  };

  const handleSave = () => {
    // Save changes to localStorage
    if (selectedUser) {
      const updatedUsers = users.map((user) =>
        user.name === selectedUser.name
          ? { ...user, name, department, country, status }
          : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Edit Users</h2>
      <form className={styles.form}>
        <User
          label="User"
          sx={{
            width: 500,
            m: 0,
            '@media (max-width: 1100px)': {
              left: 'calc((100% - 500px) / 2)',  
            },
            '@media (max-width: 500px)': {
              maxWidth: 280,
              left: 'calc((100% - 280px) / 2)', 
            },
          }}
          options={users.map((user) => ({
            value: user.name,
            label: user.name,
          }))}
          value={selectedUser ? selectedUser.name : ''} // Clear select when undo is clicked
          onChange={(e) => {
            const userName = e.target.value;
            const user = users.find((user) => user.name === userName);
            setSelectedUser(user);
          }}
        />
        <h3 className={styles.subtitle}>User Information</h3>
        <div className={styles.info}>
          <Input
            sx={{
              width: 500, m: 0, '@media (max-width: 500px)': {
              width: 280,
            } }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Department
            label="Department"
            sx={{
              width: 500, m: 0, '@media (max-width: 500px)': {
                width: 0,
                minWidth: 280,
            } }}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <Country
            label="Country"
            sx={{ width: 500, m: 0, '@media (max-width: 500px)': {
                width: 0,
                minWidth: 280,
            } }}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Status
            label="Status"
            sx={{ width: 500, m: 0, '@media (max-width: 500px)': {
                width: 0,
                minWidth: 280,
            } }}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
      </form>

      <div className={styles.footer}>
        <EditUsersButtons onUndo={handleUndo} onSave={handleSave} />
      </div>
    </div>
  );
};

export default Edit;
