import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


const CauseDescription = () => {
    return (
        <Box>
            <Typography variant='h6' fontWeight='bold'>
                ## Cause Description:
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit delectus assumenda vitae corporis voluptate, illo commodi nobis laborum expedita, natus velit atque eius temporibus quos necessitatibus odit, in quam dolorem?
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
                        Lorem ipsum dolor sit amet consectetur.
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
                        Lorem ipsum dolor sit amet consectetur.
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
                        Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CauseDescription
