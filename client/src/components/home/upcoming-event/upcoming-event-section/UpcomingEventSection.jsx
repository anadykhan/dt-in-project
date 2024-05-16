import { Box } from '@mui/material'
import React from 'react'
import EventCard from '../../../event/EventCard'
import UpcomingEventContent from '../upcoming-event-content/UpcomingEventContent'

const UpcomingEventSection = () => {
  return (
    <Box
      sx={{
        width: 'full',
        height: 600,
        backgroundImage: `url(src/assets/leohoho-GyrU_lxcFao-unsplash.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 1200,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <UpcomingEventContent></UpcomingEventContent>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          <EventCard
            startTime='12:00 AM'
            endTime='4:00 PM'
            startDate='21'
            startMonth='March'
            location='3th Avenue, NY'
            image='src/assets/istockphoto-1430371482-612x612.jpg'
            title='Education for children'
            content='sdlfjk sdlkfjsd  sdlkfj s f aksdflasdk sdfj lksjf sdfslkj sldkfjsd flskjfsd fsdlkfjsdlkj'
          ></EventCard>
          <EventCard
            startTime='12:00 AM'
            endTime='4:00 PM'
            startDate='21'
            startMonth='March'
            location='3th Avenue, NY'
            image='src/assets/istockphoto-1430371482-612x612.jpg'
            title='Education for children'
            content='sdlfjk sdlkfjsd  sdlkfj s f aksdflasdk sdfj lksjf sdfslkj sldkfjsd flskjfsd fsdlkfjsdlkj   '
          ></EventCard>
        </Box>
      </Box>
    </Box>
  )
}

export default UpcomingEventSection
