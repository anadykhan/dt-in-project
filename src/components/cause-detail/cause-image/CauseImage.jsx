import { Box } from '@mui/material';
import React from 'react';

const CauseImage = () => {
  return (
    <Box
      sx={{
        background: 'url(src/assets/seth-doyle-zf9_yiAekJs-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maxWidth: '100%',
        maxHeight: '100%',
        width: {
            xs: '100%'
        },
        paddingTop: '56.25%', // 16:9 aspect ratio (9 / 16 * 100%)
        // You can adjust the paddingTop to change the aspect ratio
        // For example, for 4:3 aspect ratio, use '75%' (3 / 4 * 100%)
        position: 'relative',
        borderRadius: 5
      }}
    />
  );
};

export default CauseImage;
