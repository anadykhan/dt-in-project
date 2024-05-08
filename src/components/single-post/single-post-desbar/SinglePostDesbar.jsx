import { Box, Typography } from '@mui/material'
import React from 'react'

const SinglePostDesbar = (props) => {

    const {sx} = props

    return (
        <Box
            sx={{
                height: 60,
                width: {
                    xs: '100vw',
                    sm: 500,
                },
                background: '#eeeeee',
                borderRadius: 20,
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                ...sx
            }}
        >
            <Typography
                sx={{
                    borderRight: 1,
                    padding: 2
                }}
            >
                Author
            </Typography>
            <Typography>
                29 February, 2024
            </Typography>
            <Typography
                sx={{
                    borderLeft: 1,
                    padding: 2
                }}>
                Education
            </Typography>
        </Box>
    )
}

export default SinglePostDesbar
