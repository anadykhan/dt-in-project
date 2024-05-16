import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const MoreCausesCard = () => {
    return (
        <Box
            sx={{
                width: {
                    xs: '100%',
                    sm: '80%'
                },
                borderRadius: 10,
                backgroundImage: 'url(src/assets/seth-doyle-zf9_yiAekJs-unsplash.jpg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingY: 3
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
                    fontSize: 20,

                }}
            >
                More Causes List
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 2,
                    width: '90%',
                    gap: 1
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        borderBottom: 1,
                        borderColor: 'white',
                        paddingBottom: 1
                    }}
                >
                    <FaRegArrowAltCircleRight
                        color='red'
                    ></FaRegArrowAltCircleRight>
                    <Typography
                        color='white'
                    >Lorem ipsum dolor sit.</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        borderBottom: 1,
                        borderColor: 'white',
                        paddingBottom: 1
                    }}
                >
                    <FaRegArrowAltCircleRight
                        color='red'
                    ></FaRegArrowAltCircleRight>
                    <Typography
                        color='white'
                    >Lorem ipsum dolor sit.</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        borderBottom: 1,
                        borderColor: 'white',
                        paddingBottom: 1
                    }}
                >
                    <FaRegArrowAltCircleRight
                        color='red'
                    ></FaRegArrowAltCircleRight>
                    <Typography
                        color='white'
                    >Lorem ipsum dolor sit.</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        borderBottom: 1,
                        borderColor: 'white',
                        paddingBottom: 1
                    }}
                >
                    <FaRegArrowAltCircleRight
                        color='red'
                    ></FaRegArrowAltCircleRight>
                    <Typography
                        color='white'
                    >Lorem ipsum dolor sit.</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default MoreCausesCard
