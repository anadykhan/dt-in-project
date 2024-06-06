import { Box, Typography } from "@mui/material"
import { BsPeople } from "react-icons/bs";

const AccordionCard = (props) => {

    const {count, content, backgroundRGB} = props
    
    return (
        <Box
            sx={{
                width: '100%',
                height: 230,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: `rgba(${backgroundRGB}, 0.5)`,
                borderRadius: 10,
                color: 'white',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    textAlign: 'center'
                }}
            >
                <BsPeople
                    fontSize={60}
                ></BsPeople>
                <Typography 
                variant="h3"
                className="merriweather"
                sx={{
                    fontWeight: 'bold'
                }}
                >{count}+</Typography>
                <Typography>{content}</Typography>
            </Box>
        </Box>
    )
}
export default AccordionCard