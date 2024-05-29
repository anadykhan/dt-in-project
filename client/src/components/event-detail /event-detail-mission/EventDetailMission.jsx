import { Box, Typography } from '@mui/material'
import React from 'react'

const EventDetailMission = (props) => {

    const {mission} = props 

    return (
        <Box>
            <Typography variant='h6' fontWeight='bold'>
                ## Event Mission:
            </Typography>
            <Typography
            textAlign='justify'
            >
                {mission}
            </Typography>
        </Box>
    )
}

export default EventDetailMission
