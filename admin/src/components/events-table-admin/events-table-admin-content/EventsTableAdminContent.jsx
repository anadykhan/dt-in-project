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
    title: "Beach Cleanup",
    titleContent: "Help clean our local beaches",
    description: "Join us for a day of cleaning up litter and debris from our beaches.",
    descriptionPoints: [
      "Pick up trash from the shore",
      "Recycle plastics and other materials",
      "Educate participants on the importance of beach conservation"
    ],
    mission: "To promote cleaner and healthier beaches for our community.",
    detail: "All participants are required to bring their own gloves and reusable bags.",
    dateTime: "2024-06-15T10:00:00Z",
    location: "Ocean Beach, San Francisco, CA"
  },
  {
    title: "Tree Planting Event",
    titleContent: "Help plant trees in our local park",
    description: "Join us for a day of planting trees to increase greenery in our community.",
    descriptionPoints: [
      "Dig holes and plant tree saplings",
      "Water and care for newly planted trees",
      "Learn about the importance of trees for the environment"
    ],
    mission: "To create a greener and more sustainable environment for future generations.",
    detail: "Participants should wear comfortable clothing and closed-toe shoes.",
    dateTime: "2024-07-20T09:00:00Z",
    location: "Central Park, New York, NY"
  }
];

const handleEventsEdit = () => {
  console.log("Edit working!")
}

const handleEventsDelete = () => {
  console.log('Delete working!')
}

export default function EventsTableAdminContent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Date and Time ($)</TableCell>
            <TableCell align="right">Location ($)</TableCell>
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
              <TableCell align="right">{row.dateTime}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">
                  <Box>
                      <Button
                      onClick={handleEventsEdit}
                      >Edit</Button>
                      <Button
                      onClick={handleEventsDelete}
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
