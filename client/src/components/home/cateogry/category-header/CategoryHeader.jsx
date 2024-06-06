import { Box, Typography } from '@mui/material'


const CategoryHeader = (props) => {

    const { title, subtitle } = props

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                alignItems: 'center',
                '@media (min-width: 768px)': {
                    alignItems: 'start'
                  },
            }}
        >
            <Box
                sx={{
                    height: 3,
                    width: 100,
                    bgcolor: 'red'
                }}
            >

            </Box>
            <Typography>
                {subtitle}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    width: 'full',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography 
                variant='h3' 
                fontWeight='bold' 
                textAlign='center'
                className='merriweather'
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    )
}

export default CategoryHeader
