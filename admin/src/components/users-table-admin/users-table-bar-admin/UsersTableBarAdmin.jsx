import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const UsersTableBarAdmin = () => {
  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}
    >
      <Button
      variant='contained'
      >
        Add User
      </Button>
    </Box>
  )
}

export default UsersTableBarAdmin
