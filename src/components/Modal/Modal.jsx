import Input from '../Input/Input'; // Custom components
import Department from '../Department/Department';
import Country from '../Countries/Countries';
import Status from '../Status/Status';
import Buttons from '../Buttons/Buttons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import styles from './Modal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 720,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 6,
  paddingRight: 6,
};

export default function BasicModal({ open, handleClose, addUser }) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');

  const resetForm = () => {
    setName('');
    setDepartment('');
    setCountry('');
    setStatus('');
  };

  const handleAddUser = () => {
    if (name && department && country && status) {
      const user = { name, department, country, status };
      addUser(user); // Call the parent component's addUser function
      resetForm(); // Clear the form fields after user is added
      handleClose(); // Close modal after user is added
    } else {
      console.log('Please fill all fields');
    }
  };

  return (
    <Modal
      open={open} // Ensure open prop is received here
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: 'center', marginBottom: 6, letterSpacing: 6 }}
        >
          ADD USER
        </Typography>
        <div className={styles.form}>
          <Input
            sx={{ width: 280, m: 0 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
          />
          <Department
            sx={{ width: 280, m: 0 }}
            label="Department"
            value={department || ''}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <Country
            sx={{ width: 280, m: 0 }}
            label="Country"
            value={country || ''}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Status
            sx={{ width: 280, m: 0 }}
            label="Status"
            value={status || ''}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <Buttons
            variant="outlined"
            color="error"
            sx={{ width: 100, height: 48 }}
            title="Cancel"
            onClick={handleClose}
          />
          <Buttons
            variant="outlined"
            color="success"
            sx={{ width: 150, height: 48 }}
            title="Add"
            onClick={handleAddUser}
          />
        </div>
      </Box>
    </Modal>
  );
}
