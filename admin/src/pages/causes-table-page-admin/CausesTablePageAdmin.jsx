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

const CausesTablePageAdmin = () => {

  const { data: causesData, isLoading: causesDataLoading } = useGetCausesData()

  if (causesDataLoading) {
    return <h1>Loading</h1>
  }

  console.log(causesData)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <CausesTableBarAdmin></CausesTableBarAdmin>
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
                  <CausesTableContentAdmin
                    key={index}
                    title={data.title}
                    collected={data.collected}
                    goal={data.goal}
                    data={data}
                  ></CausesTableContentAdmin>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default CausesTablePageAdmin
