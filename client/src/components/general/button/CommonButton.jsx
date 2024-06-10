import React from 'react'
import { Button } from '@mui/material';

const CommonButton = (props) => {
  const { content, background, hoverBackground, hoverColor, width, sx, type, onClick } = props;

  return (
    <Button
      onClick={onClick}
      variant='contained'
      type={type}
      sx={{
        width: width,
        borderRadius: 30,
        padding: 1.5,
        paddingX: 3,
        bgcolor: background,
        color: '#313131',
        boxShadow: 0,
        '&:hover': {
          bgcolor: hoverBackground || background,
          color: hoverColor || background,
          boxShadow: 'none'
        },
        ...sx
      }}
    >
      {content}
    </Button>
  );
};

export default CommonButton;
