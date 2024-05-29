import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CausesCard from '../../components/causes/CausesCard';
import ListPageBanner from '../../components/list-page-banner/ListPageBanner';
import { useGetCausesDataClient } from '../../hooks/hooks/causes-hooks-client/CausesHooksClient';

const CausesListPage = () => {
  const { data: causesDataClient, isLoading: causesDataClientLoading } = useGetCausesDataClient()
  const [contentCount, setContentCount] = useState(8);
  const navigate = useNavigate()

  if (causesDataClientLoading) {
    return <h1>Loading</h1>
  }

  console.log(causesDataClient.data)

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
          {causesDataClient.data.map((data, index) => {
            const handleCardClick = () => {
              navigate(`/cause-detail/${data._id}`);
          };
            return (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <CausesCard
                  badgeContent='EDUCATION'
                  badgeBackground='red'
                  title={data.title}
                  cardDetail={data.cardDetail}
                  collected={data.collected}
                  goal={data.goal}
                  onClick={handleCardClick}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default CausesListPage;
