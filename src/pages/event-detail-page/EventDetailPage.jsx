import { Box } from '@mui/material'
import React from 'react'
import EventDetailDescription from '../../components/event-detail /event-detail-description/EventDetailDescription'
import EventDetailImage from '../../components/event-detail /event-detail-image/EventDetailImage'
import EventDetailIntro from '../../components/event-detail /event-detail-intro /EventDetailIntro'

const EventDetailPage = () => {
  return (
    <Box>
        <EventDetailIntro></EventDetailIntro>
        <EventDetailImage></EventDetailImage>
        <EventDetailDescription></EventDetailDescription>
    </Box>
  )
}

export default EventDetailPage
