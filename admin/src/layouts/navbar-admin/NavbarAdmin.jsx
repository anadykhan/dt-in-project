import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import AppbarButtonAdmin from '../appbar-button-admin/AppbarButtonAdmin';

const NavbarAdmin = () => {
  return (
    <Box
    sx={{
        height: 60,
        width: '100%',
        background: '#0076CE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}
    >
      <AppbarButtonAdmin></AppbarButtonAdmin>
        <Avatar
        sx={{
            marginRight: 5
        }} 
        alt="Remy Sharp" 
        src="admin/src/assets/react.svg" />
    </Box>
  )
}

export default NavbarAdmin
