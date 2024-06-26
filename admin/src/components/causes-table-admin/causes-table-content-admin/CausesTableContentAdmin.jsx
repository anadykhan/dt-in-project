import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDeleteCauseData } from '../../../hooks/hooks/CausesHooks/CausesHooks';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// const handleCausesEdit = () => {
//   console.log("Edit working!")
// }

export default function CausesTableContentAdmin(props) {

  const { mutate: deleteCause } = useDeleteCauseData()

  const { title, collected, goal, data } = props

  console.log(data)

  const handleCauseDelete = () => {
    //console.log(data)
    deleteCause(data)
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
        {title}
      </TableCell>
      <TableCell align="right">{collected}</TableCell>
      <TableCell align="right">{goal}</TableCell>
      <TableCell align="right">
        <Box>
          <NavLink to={`/causes-edit/${data._id}`}>
            <Button>Edit</Button>
          </NavLink>
          <Button
          onClick={handleCauseDelete}
          >
            Delete
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}
