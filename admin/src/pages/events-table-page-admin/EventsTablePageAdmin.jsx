import React from 'react'
import Box from '@mui/material/Box';
import EventsTableAdminBar from '../../components/events-table-admin/events-table-admin-bar/EventsTableAdminBar';
import EventsTableAdminContent from '../../components/events-table-admin/events-table-admin-content/EventsTableAdminContent';

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
      <EventsTableAdminBar></EventsTableAdminBar>
      <EventsTableAdminContent></EventsTableAdminContent>
    </Box>
  )
}

export default EventsTablePageAdmin
