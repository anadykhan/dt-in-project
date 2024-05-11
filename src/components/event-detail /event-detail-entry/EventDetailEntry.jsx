import { Box, Typography } from "@mui/material"
import CommonButton from '../../general/button/CommonButton'

const EventDetailEntry = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                width: '80%',
                padding: 2,
                backgroundColor: '#F6F6F6'
            }}
        >
            <Typography>
                INVOLE NOW
            </Typography>
            <Typography
                variant="h6"
                fontWeight='bold'
                textAlign='center'
            >
                Our goal is to Help the needy people
            </Typography>
            <Typography
                textAlign='center'
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, maiores.
            </Typography>
            <CommonButton
                content='Donate Now'
                background='#E33C34'
            >
            </CommonButton>
        </Box>
    )
}
export default EventDetailEntry