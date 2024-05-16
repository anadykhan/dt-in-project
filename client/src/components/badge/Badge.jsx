import { Box } from '@mui/material'
import React from 'react'

const Badge = (props) => {

  const {content, sx, backgroundColor} = props

  return (
      <Box
      sx={{
        width: 120,
        padding: 1.5,
        textAlign: 'center',
        bgcolor: {backgroundColor},
        borderRadius: 10,
        color: 'white',
        ...sx
      }}
      >
        {content}
      </Box>
  )
}

export default Badge
