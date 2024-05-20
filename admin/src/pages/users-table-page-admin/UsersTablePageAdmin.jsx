import React from 'react'
import Box from '@mui/material/Box';
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

const UsersTablePageAdmin = () => {

  const { data: usersData, isLoading: usersDataLoading } = useGetUsersData()

  if (usersDataLoading) {
    return <h1>Loading</h1>
  }

//   console.log(usersData.data)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <UsersTableBarAdmin></UsersTableBarAdmin>
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
              usersData.data.map((data, index) => {
                //   console.log(data.username)
                return (
                  <UsersTableContentAdmin
                    key={index}
                    username={data.username}
                    password={data.password}
                    email={data.email}
                    data={data}
                  ></UsersTableContentAdmin>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UsersTablePageAdmin
