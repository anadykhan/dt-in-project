import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CommonButton from '../../general/button/CommonButton';
import NavigationBar from '../../layout/navigation/NavigationBar';

const Banner = () => {
    return (
        <Box
            sx={{
                width: 'full',
                height: 800,
                position: 'relative',
                backgroundImage: `url(src/assets/seth-doyle-zf9_yiAekJs-unsplash.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
           
            {/* Pseudo-element for dimming effect */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust alpha for desired dimness
                    zIndex: 1, // Ensure it's above the background image
                }}
            />
            <NavigationBar
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            />
            <Box
                sx={{
                    height: '100%',
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    width: 700,
                    gap: 3
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
                <Typography gutterBottom>
                    FUNDRAISING AND CHARITY FOR POOR
                </Typography>
                <Box>
                    <Typography variant="h2" textAlign='center' fontWeight='bold' gutterBottom>
                        Inspire and Help Them
                    </Typography>
                    <Typography variant="h2" textAlign='center' fontWeight='bold' gutterBottom>
                        Live Longer
                    </Typography>
                </Box>
                <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis nesciunt at dolore voluptates, deserunt sed pariatur architecto ducimus consequatur?
                </Typography>
                <Box
                sx={{
                    marginTop: 5
                }}
                >
                    <CommonButton
                        content='LEARN MORE'
                        background='#ef5350'
                        width={200}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
