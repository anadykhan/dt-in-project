import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import routeTitle from '../../utils/routeTitle';

function RouteIdentifier() {
  const location = useLocation();

  console.log(location.pathname); // This will log the current route

  return (
    <Box
    sx={{
      fontSize: 20,
      marginBottom: 3,
    }}
    >
      {
        routeTitle.map((item) => {
          if(item.route == location.pathname) {
            return item.title
          }
        })
      }
    </Box>
  ); // Or any JSX you want to render
}

export default RouteIdentifier;
