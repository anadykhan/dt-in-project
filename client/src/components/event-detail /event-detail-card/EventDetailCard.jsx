import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const EventDetailCard = (props) => {

    const { content, startDate, startMonth, startTime, endTime, location } = props

    return (
        <Box
            sx={{
                paddingY: 3,
                width: {
                    xs: '100%',
                    sm: '80%'
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#F6F6F6',
                gap: 2,
                borderRadius: 4,
            }}
        >
            <Box
                sx={{
                    width: '80%',
                    background: '#EC3C3B',
                    color: 'white',
                    textAlign: 'center',
                    padding: 1,
                    borderRadius: 5,
                    fontSize: 20
                }}
            >
                Event Details
            </Box>
            <Typography
                textAlign='center'
                sx={{
                    padding: 3
                }}
            >
                {content}
            </Typography>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1
                    }}
                >
                    <FaCalendarAlt color='orange'></FaCalendarAlt>
                    <Typography
                        fontWeight='bold'

                    >
                        {startDate} {startMonth}, 2024
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1
                    }}
                >
                    <FaClock color='orange'></FaClock>
                    <Typography fontWeight='bold'>
                        From {startTime} - {endTime}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1
                    }}
                >
                    <FaLocationDot color='orange'></FaLocationDot>
                    <Typography fontWeight='bold'>
                        {location}
                    </Typography>
                </Box>
            </Box>
            <Box
            >
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        marginBottom: 2
                    }}
                >
                    Share this event:
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 3
                    }}
                >
                    <FaInstagram fontSize={25} color='orange'></FaInstagram>
                    <FaFacebook fontSize={25} color='orange'></FaFacebook>
                    <FaYoutube fontSize={25} color='orange'></FaYoutube>
                    <FaTwitter fontSize={25} color='orange'></FaTwitter>
                </Box>
            </Box>
        </Box>
    )
}

export default EventDetailCard
