import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import CausesCard from '../../components/causes/CausesCard';
import ListPageBanner from '../../components/list-page-banner/ListPageBanner';

const CausesListPage = () => {
  const [contentCount, setContentCount] = useState(8);

  return (
    <Box
    sx={{
    }}
    >
      <Box sx={{ marginBottom: 10 }}>
        <ListPageBanner title='Causes' />
      </Box>
      <Box
      sx={{
        width: 'full',
        display: 'flex',
        justifyContent: 'center'
      }}
      >
      <Grid 
      container 
      spacing={3} 
      justifyContent="center" 
      sx={{
        width: {
          lg: 1200
        }
      }}>
        {[...Array(9)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CausesCard
              badgeContent='EDUCATION'
              badgeBackground='red'
              title='Education for all'
              content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, totam.'
              collected='1000'
              goal='2000'
            />
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
};

export default CausesListPage;
