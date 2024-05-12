import { Box } from '@mui/material'
import React from 'react'
import EventDetailCard from '../../components/event-detail /event-detail-card/EventDetailCard'
import EventDetailDescription from '../../components/event-detail /event-detail-description/EventDetailDescription'
import EventDetailImage from '../../components/event-detail /event-detail-image/EventDetailImage'
import EventDetailIntro from '../../components/event-detail /event-detail-intro /EventDetailIntro'
import EventDetailMission from '../../components/event-detail /event-detail-mission/EventDetailMission'
import EventDetailPoints from '../../components/event-detail /event-detail-points/EventDetailPoints'
import EventDetailEntry from '../../components/event-detail /event-detail-entry/EventDetailEntry'
import EventDetailUpcoming from '../../components/event-detail /event-detail-upcoming/EventDetailUpcoming'

const EventDetailPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (min-width: 1025px)': {
          flexDirection: 'row',
        },
        '@media (min-width: 1200px)': {
          width: 1200,
          margin: 'auto'
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5
        }}
      >
        <EventDetailIntro></EventDetailIntro>
        <EventDetailImage></EventDetailImage>
        <EventDetailDescription></EventDetailDescription>
        <EventDetailMission></EventDetailMission>
        <Box
          width='100%'
          
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr', // Single column by default
            gap: '20px', // Adjust the gap as needed

            '@media (min-width: 768px)': {
              gridTemplateColumns: 'repeat(2, 1fr)', // Two columns when screen width is 768px or wider
            },
          }}
        >
          <EventDetailPoints></EventDetailPoints>
          <EventDetailPoints></EventDetailPoints>
          <EventDetailPoints></EventDetailPoints>
          <EventDetailPoints></EventDetailPoints>
        </Box>
      </Box>
      <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
      }}
      >
        <EventDetailCard></EventDetailCard>
        <EventDetailEntry></EventDetailEntry>
        <EventDetailUpcoming></EventDetailUpcoming>
      </Box>
    </Box>
  )
}

export default EventDetailPage
