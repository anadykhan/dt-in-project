import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaHandshake } from "react-icons/fa";

const EventDetailPoints = (props) => {

    const {missionPoint} = props

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
               {missionPoint}
            </Typography>
        </Box>
    )
}

export default EventDetailPoints
