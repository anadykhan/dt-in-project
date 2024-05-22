import React from 'react'
import Avatar from '@mui/material/Avatar';
import AppbarButtonAdmin from '../appbar-button-admin/AppbarButtonAdmin';
import AvatarOption from '../../components/avatar-option/AvatarOption';
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';

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
      <Typography
      sx={{
        color: 'white',
        fontSize: 20,
      }}
      >
        Wecome, Kutta Ibad
      </Typography>
      <AvatarOption></AvatarOption>
    </Box>
  )
}

export default NavbarAdmin
