import { Box, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../../general/button/CommonButton'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { usePushDonatorDataClient } from '../../../hooks/hooks/causes-hooks-client/CausesHooksClient';
import { useUserData } from '../../../provider/UserProvider';




const CauseDetailCard = (props) => {

    const { collected, goal, cardDetail, _id, onClick } = props


    return (
        <Box
            sx={{
                paddingY: 3,
                background: '#f6f6f6',
                width: {
                    xs: '100%',
                    sm: '80%'
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                borderRadius: 10
            }}
        >
            <Box
                sx={{
                    width: '80%',
                    background: '#f9b441',
                    color: 'white',
                    textAlign: 'center',
                    padding: 1,
                    borderRadius: 5,
                    fontSize: 20
                }}
            >
                Fund raised
            </Box>
            <Typography
                textAlign='center'
                sx={{
                    padding: 3
                }}
            >
                {cardDetail}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 6
                }}
            >
                <Typography>
                    Collected: ${collected}
                </Typography>
                <Typography>
                    Goal: ${goal}
                </Typography>
            </Box>
            <CommonButton
                content='Donate now'
                background='white'
                width='80%'
                sx={{
                    color: 'black'
                }}
                onClick={onClick}
            >
            </CommonButton>
            <Typography fontWeight='bold'>
                Share this campaign on social media :
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 3
                }}
            >
                <FaInstagram fontSize={25}></FaInstagram>
                <FaFacebook fontSize={25}></FaFacebook>
                <FaYoutube fontSize={25}></FaYoutube>
                <FaTwitter fontSize={25}></FaTwitter>
            </Box>
        </Box>
    )
}

export default CauseDetailCard
