import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaHandshake } from "react-icons/fa";

const EventDetailPoints = () => {
    return (
        <Box
            sx={{
                wdith: {
                    xs: '100%'
                },
                background: '#F6F6F6',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
                paddingY: 5,
                gap: 2
            }}
        >
            <FaHandshake
                fontSize={50}
            ></FaHandshake>
            <Typography
                fontSize={18}
                textAlign='center'
                sx={{
                    width: '90%'
                }}
            >
                We are inspiring and helping a better lifestyle
            </Typography>
        </Box>
    )
}

export default EventDetailPoints
