import { Box, Typography } from '@mui/material'
import React from 'react'

const CauseHeader = (props) => {

    const { title, subtitle } = props

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3
            }}
        >
            <Box
                sx={{
                    height: 3,
                    width: 100,
                    bgcolor: 'red'
                }}
            >

            </Box>
            <Typography>
                {/* START DONATING FOR THEM */}
                {subtitle}
            </Typography>
            <Typography variant='h3' fontWeight='bold' textAlign='center'>
                {/* Checkout Popular Cases */}
                {title}
            </Typography>
        </Box>
    )
}

export default CauseHeader
