import { Box, Grid } from '@mui/material'
import React from 'react'
import AccordionCard from '../accordion-card/AccordionCard'
import AccordionContent from '../accordion-content/AccordionContent'

const AccordionSection = () => {
    return (
        <Box
            sx={{
                width: 'full',
                height: 600,
                backgroundImage: 'url(src/assets/abigail-keenan-_h_weGa3eGo-unsplash.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(40%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: 1100,
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2
                        }}
                    >
                        <AccordionCard count='240' content='Total Donation' />
                        <AccordionCard count='240' content='Total Donation' />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2
                        }}
                    >
                        <AccordionCard count='240' content='Total Donation' />
                        <AccordionCard count='240' content='Total Donation' />
                    </Box>
                </Box>
                <Box>
                    <AccordionContent></AccordionContent>
                </Box>
            </Box>

        </Box>
    )
}

export default AccordionSection
