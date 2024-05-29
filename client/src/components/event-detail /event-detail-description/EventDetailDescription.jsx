import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const EventDetailDescription = (props) => {

    const {description, descriptionPoint1, descriptionPoint2, descriptionPoint3} = props

  return (
    <Box>
            <Typography variant='h6' fontWeight='bold'>
                ## Event Description:
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
                        {descriptionPoint1}
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
                        {descriptionPoint2}
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
                        {descriptionPoint3}
                    </Typography>
                </Box>
            </Box>
        </Box>
  )
}

export default EventDetailDescription
