import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function BackgroundImageWithOverlay(props) {

    const {image, title, content, backgroundRGBA} = props

    return (
        <Box
            sx={{
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    width: 350,
                    height: 350,
                    position: 'relative',
                    borderRadius: 5,
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `linear-gradient(39deg, rgba${backgroundRGBA} 46%, rgba(9,9,121,0) 68%),` +
                            `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: 5,
                        position: 'relative',
                        paddingTop: 12
                    }}
                >
                    <Box
                        sx={{
                            marginLeft: 4,
                            gap: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white'
                        }}
                    >
                        <Typography 
                        variant='h5'
                        sx={{
                            width: '30%',
                            fontWeight: 'bold'
                        }}
                        className='merriweather'
                        >{title}</Typography>
                        <Typography
                        sx={{
                            width: '60%'
                        }}
                        >
                            {content}
                        </Typography>
                    </Box>

                </Box>

            </Box>
            <Button
                variant='contained'
                sx={{
                    backgroundColor: 'white',
                    color: 'red',
                    padding: 3,
                    borderRadius: 40,
                    position: 'absolute',
                    top: 300,
                    left: 20
                }}
            >
                Go
            </Button>
        </Box>

    );
}

export default BackgroundImageWithOverlay;
