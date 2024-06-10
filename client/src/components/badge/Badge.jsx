import { Box } from '@mui/material'
import React from 'react'

const Badge = (props) => {

  const {content, sx, backgroundColor} = props

  return (
      <Box
      sx={{
        padding: 1.5,
        textAlign: 'center',
        bgcolor: backgroundColor,
        borderRadius: 10,
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        ...sx
      }}
      >
        {content}
      </Box>
  )
}

export default Badge
