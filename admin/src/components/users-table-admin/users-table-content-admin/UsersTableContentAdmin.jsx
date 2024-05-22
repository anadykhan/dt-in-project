import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';
import { useDeleteUserData } from '../../../hooks/hooks/users-hook/UsersHook';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function UsersTableContentAdmin(props) {

  const { mutate: deleteUser } = useDeleteUserData()

  const { username, password, email, data } = props

  const handleUsersDelete = () => {
    deleteUser(data)
    console.log('Delete working!')
  }

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell
        component="th"
        scope="row"
        sx={{
          fontWeight: 'bold'
        }}>
        {username}
      </TableCell>
      <TableCell align="right">{password.slice(0, 9)}...</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">
        <Box>
          <NavLink to={`/users-edit/${data._id}`}>
            <Button>Edit</Button>
          </NavLink>
          <Button
            onClick={handleUsersDelete}
          >Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}
