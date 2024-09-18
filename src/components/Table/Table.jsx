import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DustBin from '../DustBin/DustBin';

export default function BasicTable({ users, setUsers }) {
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
                fontSize: 'var(--fs-less)',
              }}
            >
              Full Name
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-less)',
              }}
            >
              Department
            </TableCell>
            <TableCell
              align="left"
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-less)',
              }}
            >
              Country
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-less)',
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontFamily: 'var(--f-secondary)',
                fontWeight: 'var(--fw-bold)',
                fontSize: 'var(--fs-less)',
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
                    fontSize: 'var(--fs-less)',
                  }}
                >
                  {user.name}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: 'var(--f-primary)',
                    fontWeight: 'var(--fw-light)',
                    fontSize: 'var(--fs-less)',
                  }}
                >
                  {user.department}
                </TableCell>
                <TableCell
                  align="rig"
                  sx={{
                    fontFamily: 'var(--f-primary)',
                    fontWeight: 'var(--fw-light)',
                    fontSize: 'var(--fs-less)',
                  }}
                >
                  {user.country}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: 'var(--f-primary)',
                    fontWeight: 'var(--fw-light)',
                    fontSize: 'var(--fs-less)',
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
}
