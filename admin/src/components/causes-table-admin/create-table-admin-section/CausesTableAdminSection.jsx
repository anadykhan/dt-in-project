import React from 'react'
import CausesTableAdminBar from '../causes-table-admin-bar/CausesTableAdminBar';
import CausesTableAdminContent from '../causes-table-admin-content/CausesTableAdminContent'
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { useGetCausesData } from '../../../hooks/hooks/CausesHooks/CausesHooks';

const CausesTableAdminSection = () => {

  const { data: causesData, isLoading: causesDataLoading } = useGetCausesData()

  if (causesDataLoading) {
    return <h1>Loading</h1>
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
      <CausesTableAdminBar></CausesTableAdminBar>
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
              causesData.data.map((data, index) => {
                return (
                  <CausesTableAdminContent
                  key={index}
                  title={data.title}
                  collected={data.collected}
                  goal={data.goal}
                  ></CausesTableAdminContent>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default CausesTableAdminSection
