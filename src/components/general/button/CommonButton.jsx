import React from 'react'
import { Button } from '@mui/material';

const CommonButton = (props) => {

  const {content,  background, width, sx, type} = props

  return (
      <Button
      variant= 'contained'
      type={type}
      sx={{
        width: width,
        borderRadius: 30,
        padding: 1.5,
        paddingX: 3,
        bgcolor: `${background}`,
        ...sx
      }}
      >
        {content}
      </Button>
  )
}

export default CommonButton
