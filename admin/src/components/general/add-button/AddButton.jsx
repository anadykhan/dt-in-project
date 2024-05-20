import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AddButton = (props) => {

    const { title, onClick } = props

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}
            onClick={onClick}
        >
            <Button
                variant='contained'
            >
                {title}
            </Button>
        </Box>
    )
}

export default AddButton
