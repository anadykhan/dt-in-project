import { Box, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../../../general/button/CommonButton'


const CategoryHeader = (props) => {

    const { title, subtitle, background } = props

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 'full'
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
                {subtitle}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    width: 'full',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h3' fontWeight='bold'>
                    {title}
                </Typography>
                <CommonButton
                    content='LEARN MORE'
                    background={background}
                    width={200}
                />
            </Box>
        </Box>
    )
}

export default CategoryHeader
