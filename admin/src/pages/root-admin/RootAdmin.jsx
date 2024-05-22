import React from 'react';
import { Outlet } from 'react-router';
import NavbarAdmin from '../../layouts/navbar-admin/NavbarAdmin';
import Box from '@mui/material/Box';
import RouteIdentifier from '../../components/route-indentifier/RouteIdentifier';

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
          background: '#EEEEEE',
          padding: 5,
        }}
      >
        <RouteIdentifier></RouteIdentifier>
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
