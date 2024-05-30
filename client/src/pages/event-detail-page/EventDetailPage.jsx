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
import { useParams } from 'react-router-dom';
import { useGetSingleEventDataClient } from '../../hooks/hooks/events-hooks-client/EventsHooksClient'

const EventDetailPage = () => {

  const eventId = useParams();
  const { data: singleEventDataClient, isLoading: singleEventDataClientLoading } = useGetSingleEventDataClient(eventId.id)

  if (singleEventDataClientLoading) {
    return <h1>Loading</h1>
  }

  console.log(singleEventDataClient.data)
  console.log(singleEventDataClient.data.missionPoints)
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
        <Box>
          <EventDetailIntro
            title={singleEventDataClient.data.title}
            titleContent={singleEventDataClient.data.titleContent}
          ></EventDetailIntro>

          <EventDetailImage></EventDetailImage>

          <EventDetailDescription
            description={singleEventDataClient.data.description}
            descriptionPoint1={singleEventDataClient.data.descriptionPoints[0]}
            descriptionPoint2={singleEventDataClient.data.descriptionPoints[1]}
            descriptionPoint3={singleEventDataClient.data.descriptionPoints[2]}
          ></EventDetailDescription>

          <EventDetailMission
            mission={singleEventDataClient.data.mission}
          ></EventDetailMission>
        </Box>


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
          {
            singleEventDataClient.data.missionPoints.map((data, index) => {
              return (
                <EventDetailPoints
                  key={index}
                  missionPoint={singleEventDataClient.data.missionPoints[index]}
                ></EventDetailPoints>
              )
            })
          }
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
        <EventDetailCard
          content={singleEventDataClient.data.content}
          startDate={singleEventDataClient.data.startDate}
          startMonth={singleEventDataClient.data.startMonth}
          startTime={singleEventDataClient.data.startTime}
          endTime={singleEventDataClient.data.endTime}
          location={singleEventDataClient.data.location}
        ></EventDetailCard>
        <EventDetailEntry></EventDetailEntry>
        <EventDetailUpcoming></EventDetailUpcoming>
      </Box>
    </Box>
  )
}

export default EventDetailPage
