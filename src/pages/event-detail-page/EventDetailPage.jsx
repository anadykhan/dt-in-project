import { Box } from '@mui/material'
import React from 'react'
import EventDetailCard from '../../components/event-detail /event-detail-card/EventDetailCard'
import EventDetailDescription from '../../components/event-detail /event-detail-description/EventDetailDescription'
import EventDetailImage from '../../components/event-detail /event-detail-image/EventDetailImage'
import EventDetailIntro from '../../components/event-detail /event-detail-intro /EventDetailIntro'
import EventDetailMission from '../../components/event-detail /event-detail-mission/EventDetailMission'
import EventDetailPoints from '../../components/event-detail /event-detail-points/EventDetailPoints'

const EventDetailPage = () => {
  return (
    <Box>
        <EventDetailIntro></EventDetailIntro>
        <EventDetailImage></EventDetailImage>
        <EventDetailDescription></EventDetailDescription>
        <EventDetailMission></EventDetailMission>
        <EventDetailPoints></EventDetailPoints>
        <EventDetailPoints></EventDetailPoints>
        <EventDetailPoints></EventDetailPoints>
        <EventDetailPoints></EventDetailPoints>
        <EventDetailCard></EventDetailCard>
    </Box>
  )
}

export default EventDetailPage
