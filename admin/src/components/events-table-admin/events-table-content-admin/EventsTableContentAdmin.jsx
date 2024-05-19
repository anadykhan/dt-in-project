import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { useDeleteEventData } from '../../../hooks/hooks/event-hooks/EventHooks';

export default function EventsTableContentAdmin(props) {

  const { mutate: deleteEvent } = useDeleteEventData()

  const { title, dateTime, location, data } = props

  const handleEventsDelete = () => {
    deleteEvent(data)
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
        {title}
      </TableCell>
      <TableCell align="right">{dateTime}</TableCell>
      <TableCell align="right">{location}</TableCell>
      <TableCell align="right">
        <Box>
          <NavLink to={`/events-edit/${data._id}`}>
            <Button>Edit</Button>
          </NavLink>
          <Button
            onClick={handleEventsDelete}
          >Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}
