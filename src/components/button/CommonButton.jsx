import React from 'react'
import { Button } from '@mui/material';

const CommonButton = (props) => {

  const {content,  background, width} = props

  return (
      <Button
      variant= 'contained'
      sx={{
        width: width,
        borderRadius: 30,
        padding: 1.5,
        paddingX: 3,
        bgcolor: `${background}`
      }}
      >
        {content}
      </Button>
  )
}

export default CommonButton
