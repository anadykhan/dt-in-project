import React from 'react'
import Box from '@mui/material/Box';
import EventsTableBarAdmin from '../../components/events-table-admin/events-table-bar-admin/EventsTableBarAdmin';
import EventsTableContentAdmin from '../../components/events-table-admin/events-table-content-admin/EventsTableContentAdmin';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import { useGetEventsData } from '../../hooks/hooks/event-hooks/EventHooks';

const EventsTablePageAdmin = () => {

  const { data: eventsData, isLoading: eventsDataLoading } = useGetEventsData()

  if (eventsDataLoading) {
    return <h1>Loading</h1>
  }

  // console.log(eventsData)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <EventsTableBarAdmin></EventsTableBarAdmin>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Date and Time ($)</TableCell>
              <TableCell align="right">Location ($)</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              eventsData.data.map((data, index) => {
                return (
                  <EventsTableContentAdmin
                    key={index}
                    title={data.title}
                    dateTime={data.dateTime}
                    location={data.location}
                    data={data}
                  ></EventsTableContentAdmin>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default EventsTablePageAdmin
