import Input from '../Input/Input'; // Custom components
import Department from '../Department/Department';
import Country from '../Countries/Countries';
import Status from '../Status/Status';
import Buttons from '../Buttons/Buttons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
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
  minHeight: 400, // Ensure consistent height
};

const BasicModal = ({ open, handleClose, addUser }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [country, setCountry] = useState('');
  const [status, setStatus] = useState('');
  const [showError, setShowError] = useState(false); // State to control error visibility

  const resetForm = () => {
    setName('');
    setDepartment('');
    setCountry('');
    setStatus('');
    setShowError(false); // Reset error state when form is cleared
  };

  const handleAddUser = () => {
    if (name && department && country && status) {
      const user = { name, department, country, status };
      addUser(user); // Call the parent component's addUser function
      resetForm(); // Clear the form fields after user is added
      handleClose(); // Close modal after user is added
    } else {
      setShowError(true); // Show error message if fields are not filled
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'grey.500',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            textAlign: 'center',
            marginBottom: 6,
            letterSpacing: 6,
            fontFamily: 'var(--f-secondary)',
            fontSize: 'var(--fs-sub)',
            fontWeight: 'var(--fw-med)',
          }}
        >
          ADD USER
        </Typography>

        <div className={styles.form}>
          <Input
            sx={{
              width: 280,
              m: 0,
              '& .MuiInputBase-input::placeholder': {
                fontSize: 'var(--fs-extra-small)',
                fontWeight: 'var(--fw-reg)',
                fontFamily: 'var(--f-primary)',
              },
            }}
            InputLabelProps={{
              sx: {
                fontSize: 'var(--fs-extra-small)',
                fontWeight: 'var(--fw-reg)',
                fontFamily: 'var(--f-primary)',
              },
            }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setShowError(false); // Hide error message when user types
            }}
            placeholder="Enter full name"
          />
          <Department
            sx={{ width: 280, m: 0 }}
            label="Department"
            value={department || ''}
            onChange={(e) => {
              setDepartment(e.target.value);
              setShowError(false); // Hide error message when user types
            }}
          />
          <Country
            sx={{ width: 280, m: 0 }}
            label="Country"
            value={country || ''}
            onChange={(e) => {
              setCountry(e.target.value);
              setShowError(false); // Hide error message when user types
            }}
          />
          <Status
            sx={{ width: 280, m: 0 }}
            label="Status"
            value={status || ''}
            onChange={(e) => {
              setStatus(e.target.value);
              setShowError(false); // Hide error message when user types
            }}
          />
        </div>

        {/* Error message section, hidden by default */}
        <Typography
          sx={{
            visibility: showError ? 'visible' : 'hidden', // Toggle visibility based on state
            color: 'red',
            fontSize: 'var(--fs-extra-small)',
            textAlign: 'center',
            marginBottom: 2,
            fontFamily: 'var(--f-primary)',
          }}
        >
          Please fill all fields
        </Typography>

        <div className={styles.buttons}>
          <Buttons
            variant="outlined"
            color="error"
            sx={{
              width: 100,
              height: 48,
              fontFamily: 'var(--f-primary)',
              fontSize: 'var(--fw-light)',
              fontWeight: 'var(--fs-extra-small)',
              textTransform: 'none',
            }}
            title="Cancel"
            onClick={resetForm}
          />
          <Buttons
            variant="outlined"
            color="success"
            sx={{
              width: 150,
              height: 48,
              fontFamily: 'var(--f-primary)',
              fontSize: 'var(--fw-light)',
              fontWeight: 'var(--fs-extra-small)',
              textTransform: 'none',
            }}
            title="Add"
            onClick={handleAddUser}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default BasicModal;
