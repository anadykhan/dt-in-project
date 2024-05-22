import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import { useGetUsersData } from '../../hooks/hooks/users-hook/UsersHook';
import UsersTableBarAdmin from '../../components/users-table-admin/users-table-bar-admin/UsersTableBarAdmin';
import UsersTableContentAdmin from '../../components/users-table-admin/users-table-content-admin/UsersTableContentAdmin';
import AddButton from '../../components/general/add-button/AddButton';
import { useNavigate } from 'react-router-dom';
import tableHeader from '../../utils/tabledata';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const UsersTablePageAdmin = () => {
  const navigate = useNavigate()
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

  const handleUserEvent = () => {
    console.log('Working')
    navigate('/users-form')
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <AddButton
      title='Add User'
      onClick={handleUserEvent}
      ></AddButton>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                tableHeader.users.map((item) => {
                  return (
                    <TableCell key={item.key} align="right">{item.item}</TableCell>
                  )
                })
              }
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
