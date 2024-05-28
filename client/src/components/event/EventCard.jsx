import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const EventCard = (props) => {

    const {startTime, endTime, startDate, startMonth, location, image, title, content} = props

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'start',
            width: 600,
            height: 170,
            gap: 2,
            borderRadius: 4
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 0 auto',
                    width: '90%',
                    gap: 1,
                }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <FaRegClock></FaRegClock>
                            <Typography>{startTime} - {endTime}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <IoLocationOutline></IoLocationOutline>
                            <Typography>{location}</Typography>
                        </Box>
                    </Box>
                    <Typography 
                    component="div" 
                    variant="h5"
                    >
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {content}
                    </Typography>
                </CardContent>

            </Box>
            <Box
                sx={{
                    width: 180,
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        color: 'white',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                    }}
                >
                    <Typography 
                    variant='h3'
                    sx={{
                        '@media (max-width: 500px)': {
                            fontSize: 39
                          },
                    }}
                    >{startDate}</Typography>
                    <Typography>{startMonth}</Typography>
                </Box>
                <CardMedia
                    component="img"
                    image={image}
                    alt="Live from space album cover"
                    sx={{
                        width: '100%',
                        height: '100%',
                        filter: 'brightness(60%)',
                    }}
                />
            </Box>
        </Card>
    )
}

export default EventCard
