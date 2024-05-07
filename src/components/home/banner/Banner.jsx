import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import CommonButton from '../../general/button/CommonButton'

const Banner = () => {
    return (
        <Box
            sx={{
                width: 'full',
                height: 650,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(src/assets/seth-doyle-zf9_yiAekJs-unsplash.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography>
                    FUNDRAISING AND CHARITY FOR POOR
                </Typography>
                <Box>
                    <Typography>
                        Inspire and Help Them
                    </Typography>
                    <Typography>
                        Live Longer
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis nesciunt at dolore voluptates, deserunt sed pariatur architecto ducimus consequatur?
                </Typography>
            </Box>
            <CommonButton
                content='LEARN MORE'
                background='red'
                width={230}
            ></CommonButton>
        </Box>
    )
}

export default Banner
