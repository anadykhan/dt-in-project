import { Box } from '@mui/material';
import React from 'react';
import AccordionCard from '../accordion-card/AccordionCard';
import AccordionContent from '../accordion-content/AccordionContent';

const AccordionSection = () => {
    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative', // Add position relative to position children correctly
                backgroundImage: 'url(src/assets/abigail-keenan-_h_weGa3eGo-unsplash.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Apply the brightness filter only to the background image */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(3px)', // Add a semi-transparent overlay for dimming
                }}
            ></Box>
            <Box
                sx={{
                    //width: 1100,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    zIndex: 1,
                    gap: 7,
                    '@media (min-width: 1025px)': {
                        flexDirection: 'row'
                    },
                }}
            >
                <Box>
                    <AccordionContent></AccordionContent>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            '@media (min-width: 600px)': {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: '20px',
                                placeItems: 'center',
                            },
                        }}
                    >
                        <AccordionCard count='300' content='Education for all'></AccordionCard>
                        <AccordionCard count='300' content='Education for all'></AccordionCard>
                        <AccordionCard count='300' content='Education for all'></AccordionCard>
                        <AccordionCard count='300' content='Education for all'></AccordionCard>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}

export default AccordionSection;
