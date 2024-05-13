import { Box, Typography } from '@mui/material'
import React from 'react'

const RegistrationContentHeader = () => {
  return (
      <Box
      sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3
      }}
      >
          <Typography>
              GET INVOLVED NOW
          </Typography>
          <Typography variant='h4' fontWeight='bold'>
              Our goal is to help the poor people
          </Typography>
          <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium nulla nihil tempore dicta! Ratione quibusdam.
          </Typography>
      </Box>
  )
}

export default RegistrationContentHeader
