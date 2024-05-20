import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CausesTableBarAdmin = (props) => {

  const {onClick} = props

  return (
    <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}
    onClick={onClick}
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
