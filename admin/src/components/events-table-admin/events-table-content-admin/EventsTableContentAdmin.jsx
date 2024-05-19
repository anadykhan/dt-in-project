import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const handleEventsEdit = () => {
  console.log("Edit working!")
}

const handleEventsDelete = () => {
  console.log('Delete working!')
}

export default function EventsTableContentAdmin(props) {

  const { title, dateTime, location, data } = props

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
      <TableCell align="right">{dateTime}</TableCell>
      <TableCell align="right">{location}</TableCell>
      <TableCell align="right">
        <Box>
          <Button
            onClick={handleEventsEdit}
          >Edit</Button>
          <Button
            onClick={handleEventsDelete}
          >Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}
