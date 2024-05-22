import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';

const AdminProfile = (props) => {

    const { _id, username, name, email, password } = props

    return (
        <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            boxShadow: 2,
            padding: 3,
            '@media (min-width: 650px)': {
                // flexDirection: 'row',
                width: 500
              },
        }}

        >
            <Avatar
            sx={{
                width: 80,
                height: 80
            }}
            alt="Remy Sharp" 
            src="admin/src/assets/react.svg" />
            <Typography
            sx={{
                fontSize: 25,
                fontWeight: 'bold'
            }}
            >
                John Doe
            </Typography>
            <Typography>
                johndoe34
            </Typography>
            <Typography>
                ID: slkj!lskjljk343lkjDLKj
            </Typography>
            <Typography>
                Email: johndoe123@gmail.com
            </Typography>
        </Box>
    )
}

export default AdminProfile
