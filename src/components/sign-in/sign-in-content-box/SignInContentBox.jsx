import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const SignInContentBox = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#F6F6F6',
                width: {
                    xs: 'calc(100% - 10px)',
                },
                paddingY: 4,
                borderLeft: 10,
                borderColor: '#EC3C3B',
                borderRadius: 3,
            }}
        >
            <Box
                sx={{
                    width: '80%',
                    margin: 'auto',
                    paddingTop: 5,
                    position: 'relative', // Ensure the text box is positioned relatively
                    zIndex: 5, // Set a higher zIndex for the text
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}
            >
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid ipsum ullam quod alias cum provident non, eius vero consequuntur laborum tenetur doloremque assumenda eaque nisi cumque. Veritatis
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center'

                    }}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src="src/assets/abigail-keenan-_h_weGa3eGo-unsplash.jpg"
                        sx={{
                            height: 60,
                            width: 60
                        }}
                    />
                    <Box
                        sx={{
                            marginLeft: 3
                        }}

                    >
                        <Typography variant='h6' fontWeight='bold'>
                            Teresa South
                        </Typography>
                        <Typography color='#EC457D'>
                            CEO
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    top: 30,
                    left: 20,
                    width: 70,
                    height: 70,
                    backgroundImage: 'url(src/assets/pngaaa.com-823158.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    zIndex: 3, // Lower zIndex for the background image
                }}
            ></Box>
        </Box>
    );
};

export default SignInContentBox;
