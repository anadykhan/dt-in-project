import { Box, Typography } from '@mui/material'


const CauseSummary = (props) => {

    const { summary } = props

    return (
        <Box>
            <Typography variant='h6' fontWeight='bold'>
                ## Cause Summary:
            </Typography>
            <Typography>
                {summary}
            </Typography>
        </Box>
    )
}

export default CauseSummary
