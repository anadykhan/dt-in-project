import { Box, Typography } from '@mui/material'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaChevronDown } from "react-icons/fa";


const AccordionContent = () => {
    return (
        <Box
            sx={{
                width: 500,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}
        >
            <Typography>
                OUR CHARITY MAIN GOAL
            </Typography>
            <Typography
                variant='h4'
                fontWeight='bold'
            >
                Inspire and Help them <br /> Live Longer
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perferendis. Animi illum nam dolores temporibus voluptate autem nemo ab quia.
            </Typography>
            <Accordion
            >
                <AccordionSummary
                    expandIcon={<FaChevronDown></FaChevronDown>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>1. Accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<FaChevronDown></FaChevronDown>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>2. Accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<FaChevronDown></FaChevronDown>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>3. Accordion</Typography>
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
