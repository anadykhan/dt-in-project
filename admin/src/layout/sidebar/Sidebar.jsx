import { Box, Button } from '@mui/material';
import React from 'react';
import { NavLink } from "react-router-dom"

const navList = ['Causes', 'Events', 'Users', 'Logout']

const Sidebar = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        background: '#001528',
        width: '15%',
        height: '100vh',
        padding: 3,
        gap: 5,
      }}
    >
      {
        navList.map((data, index) => {
          return (
            <NavLink
            key={index}
            sx={{
            }}
            >
              <Button
              sx={{
                color: 'white',
                fontSize: 18,
              }}
              >
                {data}
              </Button>
            </NavLink>
          )
        })
      }
    </Box>
  );
};
export default Sidebar;