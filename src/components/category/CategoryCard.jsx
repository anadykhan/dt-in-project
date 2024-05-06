import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function BackgroundImageWithOverlay(props) {

    const {image, title, content} = props

    return (
        <Box
            sx={{
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    width: 400,
                    height: 400,
                    position: 'relative',
                    borderRadius: 5,
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'linear-gradient(to top right, rgba(255,0,0,0.7), rgba(255,0,0,0)),' +
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
                            width: '50%',
                            marginLeft: 4,
                            gap: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            color: 'white'
                        }}
                    >
                        <Typography variant='h4'>{title}</Typography>
                        <Typography>
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
                    top: 350,
                    left: 20
                }}
            >
                Go
            </Button>
        </Box>

    );
}

export default BackgroundImageWithOverlay;
