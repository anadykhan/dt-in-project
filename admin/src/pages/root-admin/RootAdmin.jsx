import React from 'react';
import { Outlet } from 'react-router';
import SiderAdmin from '../../layouts/sider-admin/SiderAdmin';
import Box from '@mui/material/Box';
import AppbarButtonAdmin from '../../layouts/appbar-button-admin/AppbarButtonAdmin';
import { useMediaQuery } from '@mui/material';

const RootAdmin = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 768px)': {
          flexDirection: 'row',
          marginTop: 5
        },
      }}
    >
      <AppbarButtonAdmin sx={{
        display: useMediaQuery('(min-width:768px)') ? 'none' : 'block'
      }} />
      <SiderAdmin sx={{
        display: useMediaQuery('(min-width:768px)') ? 'block' : 'none'
      }} />
      <Outlet />
      
    </Box>
  );
};

export default RootAdmin;
