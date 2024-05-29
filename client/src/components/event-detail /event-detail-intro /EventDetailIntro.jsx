import { Box, Typography } from '@mui/material'
import React from 'react'

const EventDetailIntro = (props) => {

  const {title, titleContent} = props

  return (
    <Box>
        <Typography
        variant='h4'
        fontWeight='bold'
        >
            {title}
        </Typography>
        <Typography
        textAlign='justify'
        >
            {titleContent}
        </Typography>
    </Box>
  )
}

export default EventDetailIntro
