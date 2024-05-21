import React from 'react';
import { Outlet } from 'react-router';
import Box from '@mui/material/Box';
import NavbarAdmin from '../../layouts/navbar-admin/NavbarAdmin';

const RootAdmin = () => {
  return (
    <Box
    sx={{
      width: '100%',
    }}
    >
      <NavbarAdmin></NavbarAdmin>
      <Box
        sx={{
          padding: 5,
          marginTop: 5
        }}
      >
        {/* <AppbarButtonAdmin sx={{
          display: useMediaQuery('(min-width:768px)') ? 'none' : 'block'
        }} />
        <SiderAdmin sx={{
          display: useMediaQuery('(min-width:768px)') ? 'block' : 'none'
        }} /> */}
        <Outlet />

      </Box>
    </Box>
  );
};

export default RootAdmin;
