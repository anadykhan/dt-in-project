import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useGetCausesData } from '../../hooks/hooks/CausesHooks/CausesHooks';
import CausesTableContentAdmin from '../../components/causes-table-admin/causes-table-content-admin/CausesTableContentAdmin';
import Box from '@mui/material/Box';
import CausesTableBarAdmin from '../../components/causes-table-admin/causes-table-bar-admin/CausesTableBarAdmin';
import Button from '@mui/material/Button';

const CausesTablePageAdmin = () => {
  const initialDataCount = 15;
  const additionalDataCount = 10;

  const { data: causesData, isLoading: causesDataLoading } = useGetCausesData();
  const [displayedDataCount, setDisplayedDataCount] = useState(initialDataCount);

  const handleLoadMore = () => {
    setDisplayedDataCount(prevCount => prevCount + additionalDataCount);
  };

  if (causesDataLoading) {
    return <h1>Loading</h1>;
  }

  const remainingDataCount = causesData.data.length - displayedDataCount;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <CausesTableBarAdmin />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Collected ($)</TableCell>
              <TableCell align="right">Goal ($)</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              causesData.data.slice(0, displayedDataCount).map((data, index) => (
                <CausesTableContentAdmin
                  key={index}
                  title={data.title}
                  collected={data.collected}
                  goal={data.goal}
                  data={data}
                />
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      {remainingDataCount > 0 && (
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" onClick={handleLoadMore}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CausesTablePageAdmin;
