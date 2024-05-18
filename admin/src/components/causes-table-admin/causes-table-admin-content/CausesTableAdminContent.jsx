import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const handleCausesEdit = () => {
  console.log("Edit working!")
}

const handleCausesDelete = () => {
  console.log('Delete working!')
}

export default function CausesTableAdminContent(props) {

  const { title, collected, goal } = props

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
          <Button
            onClick={handleCausesEdit}
          >Edit</Button>
          <Button
            onClick={handleCausesDelete}
          >Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}
