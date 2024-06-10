import { Box, Typography } from '@mui/material'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaChevronDown } from "react-icons/fa";
import { borderColor } from '@mui/system';


const AccordionContent = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                color: 'white',
                fontWeight: 'bold',
            }}
        >
            <Typography>
                OUR CHARITY MAIN GOAL
            </Typography>
            <Typography
                variant='h3'
                fontWeight='bold'
                className='merriweather'
            >
                Inspire and Help them <br /> Live Longer
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perferendis. Animi illum nam dolores temporibus voluptate autem nemo ab quia.
            </Typography>
            <Accordion
                sx={{
                    background: 'transparent',
                    color: 'white',
                    borderBottom: 1,
                    boxShadow: 0,
                }}
            >
                <AccordionSummary
                    expandIcon={<FaChevronDown color='white'></FaChevronDown>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography
                        sx={{
                            fontSize: 17
                        }}
                        className='merriweather'
                    >01. We Help Poor People.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    background: 'transparent',
                    color: 'white',
                    borderBottom: 1,
                    boxShadow: 0,
                }}
            >
                <AccordionSummary
                    expandIcon={<FaChevronDown color='white'></FaChevronDown>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography
                        sx={{
                            fontSize: 17,
                        }}
                        className='merriweather'
                    >01. We Help Poor People.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                sx={{
                    background: 'transparent',
                    color: 'white',
                    borderBottom: 1,
                    boxShadow: 0,
                }}
            >
                <AccordionSummary
                    expandIcon={<FaChevronDown color='white'></FaChevronDown>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography
                        sx={{
                            fontSize: 17
                        }}
                        className='merriweather'
                    >01. We Help Poor People.</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default AccordionContent
