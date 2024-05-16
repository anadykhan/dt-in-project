import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const EventsTableAdminBar = () => {
  return (
    <Box
    sx={{
      background: 'red',
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}
    >
      <Button
      variant='contained'
      >
        Add Event
      </Button>
    </Box>
  )
}

export default EventsTableAdminBar
