import React from 'react'
import { Box } from '@mui/material'

const EventDetailImage = () => {
    return (
        <Box>
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
                    paddingTop: '56.25%',
                    position: 'relative',
                    borderRadius: 5
                }}
            />
        </Box>
    )
}

export default EventDetailImage
