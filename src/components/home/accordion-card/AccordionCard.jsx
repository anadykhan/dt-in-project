import { Box, Typography } from "@mui/material"
import { BsPeople } from "react-icons/bs";

const AccordionCard = () => {
    return (
        <Box
            sx={{
                width: 250,
                height: 230,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'rgba(255, 0, 0, 0.8)',
                borderRadius: 10,
                color: 'white'
            }}
        >
            <Box
                sx={{
                    textAlign: 'center'
                }}
            >
                <BsPeople
                    fontSize={60}
                ></BsPeople>
                <Typography variant="h3">250</Typography>
                <Typography>Our Volunteers</Typography>
            </Box>
        </Box>
    )
}
export default AccordionCard