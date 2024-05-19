import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CausesTableBarAdmin = () => {
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
        Add Cause
      </Button>
    </Box>
  )
}

export default CausesTableBarAdmin
