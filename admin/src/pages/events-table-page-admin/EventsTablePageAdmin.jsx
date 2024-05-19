import React from 'react'
import Box from '@mui/material/Box';
import EventsTableBarAdmin from '../../components/events-table-admin/events-table-bar-admin/EventsTableBarAdmin';
import EventsTableContentAdmin from '../../components/events-table-admin/events-table-content-admin/EventsTableContentAdmin';

const EventsTablePageAdmin = () => {
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
      <EventsTableContentAdmin></EventsTableContentAdmin>
    </Box>
  )
}

export default EventsTablePageAdmin
