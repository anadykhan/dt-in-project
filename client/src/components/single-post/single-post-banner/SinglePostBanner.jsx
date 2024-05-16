import { Box, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../../general/button/CommonButton'

const SinglePostBanner = () => {
    return (
        <Box
            sx={{
                position: 'relative', // Set position to relative for absolute positioning of text
                width: 'full',
                height: {
                    xs: 600,
                    sm: 400
                },
            }}
        >
            {/* Background layer with brightness filter */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(src/assets/seth-doyle-zf9_yiAekJs-unsplash.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(60%)', // Adjust brightness as needed
                }}
            />
            {/* Text layer */}
            <Box
                sx={{
                    position: 'relative', // Set position to relative for absolute positioning of text
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                    gap: 6
                }}
            >
                <Typography
                    variant='h3'
                    fontWeight='bold'
                    textAlign='center'
                    sx={{
                        width: '60%'
                    }}
                >
                    Drinking water and food for needy people
                </Typography>
                <CommonButton
                    content='donate now '
                    background='#ef5350'
                    width={200}
                />
            </Box>
        </Box>
    )
}

export default SinglePostBanner
