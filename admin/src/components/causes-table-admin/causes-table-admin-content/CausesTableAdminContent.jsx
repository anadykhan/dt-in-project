import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const rows = [
    {
        id: "664201e7029d25d361104e46",
        title: "Environmental Conservation",
        titleContent: "Protecting our planet for future generations",
        description: "We are dedicated to preserving and restoring our environment by promoting environmental conservation initiatives.",
        descriptionPoints: [
          "Promote sustainable practices",
          "Protect biodiversity",
          "Combat climate change"
        ],
        collected: 2500,
        goal: 5000,
        cardDetail: "Join us in the fight against climate change!",
        priority: 2,
      },
      {
        id: "664201e7029d25d361104e46",
        title: "Environmental Conservation",
        titleContent: "Protecting our planet for future generations",
        description: "We are dedicated to preserving and restoring our environment by promoting environmental conservation initiatives.",
        descriptionPoints: [
          "Promote sustainable practices",
          "Protect biodiversity",
          "Combat climate change"
        ],
        collected: 2500,
        goal: 5000,
        cardDetail: "Join us in the fight against climate change!",
        priority: 2,
      },
      {
        id: "664201e7029d25d361104e46",
        title: "Environmental Conservation",
        titleContent: "Protecting our planet for future generations",
        description: "We are dedicated to preserving and restoring our environment by promoting environmental conservation initiatives.",
        descriptionPoints: [
          "Promote sustainable practices",
          "Protect biodiversity",
          "Combat climate change"
        ],
        collected: 2500,
        goal: 5000,
        cardDetail: "Join us in the fight against climate change!",
        priority: 2,
      }
];

const handleCausesEdit = () => {
  console.log("Edit working!")
}

const handleCausesDelete = () => {
  console.log('Delete working!')
}

export default function CausesTableAdminContent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Collected ($)</TableCell>
            <TableCell align="right">Goal ($)</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
              component="th" 
              scope="row" 
              sx={{
                  fontWeight: 'bold'
              }}>
                {row.title}
              </TableCell>
              <TableCell align="right">{row.collected}</TableCell>
              <TableCell align="right">{row.goal}</TableCell>
              <TableCell align="right">
                  <Box>
                      <Button
                      onClick={handleCausesEdit}
                      >Edit</Button>
                      <Button
                      onClick={handleCausesDelete}
                      >Delete</Button>
                  </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
