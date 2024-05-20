import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import { useGetUsersData } from '../../hooks/hooks/users-hook/UsersHook';
import UsersTableBarAdmin from '../../components/users-table-admin/users-table-bar-admin/UsersTableBarAdmin';
import UsersTableContentAdmin from '../../components/users-table-admin/users-table-content-admin/UsersTableContentAdmin';

const UsersTablePageAdmin = () => {
  const initialDataCount = 15;
  const additionalDataCount = 10;

  const { data: usersData, isLoading: usersDataLoading } = useGetUsersData();
  const [displayedDataCount, setDisplayedDataCount] = useState(initialDataCount);

  const handleLoadMore = () => {
    setDisplayedDataCount(prevCount => prevCount + additionalDataCount);
  };

  if (usersDataLoading) {
    return <h1>Loading</h1>;
  }

  const remainingDataCount = usersData.data.length - displayedDataCount;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <UsersTableBarAdmin />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Email ($)</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              usersData.data.slice(0, displayedDataCount).map((data, index) => (
                <UsersTableContentAdmin
                  key={index}
                  username={data.username}
                  password={data.password}
                  email={data.email}
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

export default UsersTablePageAdmin;
