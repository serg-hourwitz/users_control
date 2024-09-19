import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DustBin from '../DustBin/DustBin';

const BasicTable = ({ users, setUsers }) => {
  const deleteUser = (indexToDelete) => {
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-extra-small)',
              }}
            >
              Full Name
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-extra-small)',
              }}
            >
              Department
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-extra-small)',
              }}
            >
              Country
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-extra-small)',
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-extra-small)',
                color: 'var(--c-white)',
              }}
            >
              Actions
            </TableCell>
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
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontFamily: 'var(--f-primary)',
                    fontWeight: 'var(--fw - reg)',
                    fontSize: 'var(--fs-extra-small)',
                  }}
                >
                  {user.name}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: 'var(--f-primary)',
                    fontWeight: 'var(--fw-light)',
                    fontSize: 'var(--fs-extra-small)',
                  }}
                >
                  {user.department}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: 'var(--f-primary)',
                    fontWeight: 'var(--fw-light)',
                    fontSize: 'var(--fs-extra-small)',
                  }}
                >
                  {user.country}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: 'var(--f-primary)',
                    fontWeight: 'var(--fw-light)',
                    fontSize: 'var(--fs-extra-small)',
                  }}
                >
                  {user.status}
                </TableCell>
                <TableCell align="center">
                  <DustBin onClick={() => deleteUser(index)} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
