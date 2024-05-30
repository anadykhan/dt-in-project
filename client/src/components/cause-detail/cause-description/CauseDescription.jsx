import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


const CauseDescription = (props) => {

    const {description, descriptionPoints1, descriptionPoints2, descriptionPoints3} =  props

    return (
        <Box>
            <Typography variant='h6' fontWeight='bold'>
                ## Cause Description:
            </Typography>
            <Typography
            textAlign='justify'
            >
               {description}
            </Typography>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <FaCheckCircle
                        color='red'
                    ></FaCheckCircle>
                    <Typography>
                        {descriptionPoints1}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <FaCheckCircle
                        color='red'
                    ></FaCheckCircle>
                    <Typography>
                        {descriptionPoints2}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <FaCheckCircle
                        color='red'
                    ></FaCheckCircle>
                    <Typography>
                        {descriptionPoints3}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CauseDescription
