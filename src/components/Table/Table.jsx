import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicModal from '../Modal/Modal';
import DustBin from '../DustBin/DustBin';

export default function BasicTable() {
  const [users, setUsers] = useState([]); // Start with an empty array

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteUser = (indexToDelete) => {
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
  };

  return (
    <>
      <BasicModal addUser={addUser} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No users available. Add a new user to see them here.
                </TableCell>
              </TableRow>
            ) : (
              users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell align="right">{user.department}</TableCell>
                  <TableCell align="right">{user.country}</TableCell>
                  <TableCell align="right">{user.status}</TableCell>
                  <TableCell align="right">
                    <DustBin onClick={() => deleteUser(index)} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
