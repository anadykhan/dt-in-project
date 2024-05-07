import React from 'react'
import { Box, Typography } from '@mui/material';
import { MdControlPoint } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import CommonButton from '../../general/button/CommonButton';


const UpcomingEventContent = () => {
    return (
        <Box
            sx={{
                width: 500,
                display: 'flex',
                flexDirection: 'column',
                gap: 3
            }}
        >
            <Box
                sx={{
                    height: 3,
                    width: 50,
                    bgcolor: 'red'
                }}
            ></Box>
            <Typography>
                OUR LATEST EVENT
            </Typography>
            <Typography variant='h3' fontWeight='bold'>
                Upcoming Events
            </Typography>
            <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quas rerum maiores. Dignissimos aut doloremque sequi tenetur reprehenderit fuga ut!
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <Box
                    sx={{
                        width: 50,
                        height: 50,
                        padding: 1,
                        color: 'white',
                        backgroundColor: 'orange',
                        borderRadius: 40
                    }}
                >
                    <FaHandshake
                        fontSize={50}
                    ></FaHandshake>
                </Box>
                <Typography>
                    We are inspiring and helping them to live a better lifestyle
                </Typography>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <MdControlPoint
                        color='red'
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <MdControlPoint
                        color='red'
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <MdControlPoint
                        color='red'
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                </Box>
            </Box>
            <CommonButton
                content='LEARN MORE'
                background='red'
                width={150}
            />
        </Box>
    )
}

export default UpcomingEventContent
