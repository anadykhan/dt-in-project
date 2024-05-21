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
import { useNavigate } from 'react-router-dom';
import AddButton from '../../components/general/add-button/AddButton';
import tableHeader from '../../utils/tabledata';

const EventsTablePageAdmin = () => {
  const navigate = useNavigate()
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

  const handleAddEvent = () => {
    console.log('Working')
    navigate('/events-form')
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
        title='Add Event'
        onClick={handleAddEvent}
      ></AddButton>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                tableHeader.events.map((item) => {
                  return (
                    <TableCell key={item.key} align="right">{item.item}</TableCell>
                  )
                })
              }
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
                  sx={{
                    '@media (max-width: 500px)': {
                      padding: 0.5
                    },
                  }}
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
