import { Box, Typography } from '@mui/material'

const ListPageBanner = (props) => {

    const {title, sx} = props

    return (
        <Box
            sx={{
                position: 'relative', // Set position to relative for absolute positioning of text
                width: 'full',
                height: {
                    xs: 400,
                    sm: 400
                },
                ...sx
            }}
        >
            {/* Background layer with brightness filter */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(src/assets/seth-doyle-zf9_yiAekJs-unsplash.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(60%)', // Adjust brightness as needed
                }}
            />
            {/* Text layer */}
            <Box
                sx={{
                    position: 'relative', // Set position to relative for absolute positioning of text
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    color: 'white',
                }}
            >
                <Typography
                    variant='h3'
                    fontWeight='bold'
                    textAlign='center'
                    sx={{
                        width: '60%'
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Box>
    )
}

export default ListPageBanner
