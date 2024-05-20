import React, { useState } from 'react';
import Box from '@mui/material/Box';
import EventsTableBarAdmin from '../../components/events-table-admin/events-table-bar-admin/EventsTableBarAdmin';
import EventsTableContentAdmin from '../../components/events-table-admin/events-table-content-admin/EventsTableContentAdmin';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import { useGetEventsData } from '../../hooks/hooks/event-hooks/EventHooks';

const EventsTablePageAdmin = () => {
  const initialDataCount = 15;
  const additionalDataCount = 10;

  const { data: eventsData, isLoading: eventsDataLoading } = useGetEventsData();
  const [displayedDataCount, setDisplayedDataCount] = useState(initialDataCount);

  const handleLoadMore = () => {
    setDisplayedDataCount(prevCount => prevCount + additionalDataCount);
  };

  if (eventsDataLoading) {
    return <h1>Loading</h1>;
  }

  const remainingDataCount = eventsData.data.length - displayedDataCount;

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <EventsTableBarAdmin />
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
            {
              eventsData.data.slice(0, displayedDataCount).map((data, index) => (
                <EventsTableContentAdmin
                  key={index}
                  title={data.title}
                  dateTime={data.dateTime}
                  location={data.location}
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

export default EventsTablePageAdmin;
