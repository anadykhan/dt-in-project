import { Box, Grid } from '@mui/material'
import React from 'react'
import EventCard from '../../components/event/EventCard'
import ListPageBanner from '../../components/list-page-banner/ListPageBanner'
import { useGetEventsDataClient } from '../../hooks/hooks/events-hooks-client/EventsHooksClient'

const EventsListPage = () => {

    const {data: eventsDataClient, isLoading: eventsDataLoadingClient} = useGetEventsDataClient()

    if(eventsDataLoadingClient){
        return <h1>Loading</h1>
    }

    console.log(eventsDataClient)

    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Box sx={{ marginBottom: 10 }}>
                <ListPageBanner title='Events' />
            </Box>
            <Box
                sx={{
                    width: 'full',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{
                        width: {
                            lg: 1200
                        }
                    }}
                >
                    {[...Array(9)].map((_, index) => (
                        <Grid item xs={12} sm={12} md={12} lg={6} key={index} sx={{ display: 'flex', justifyContent: 'center'}}>
                            <EventCard
                                startTime='12:00 AM'
                                endTime='4:00 PM'
                                startDate='12th'
                                startMonth='June'
                                location='29/A London Bridge, London'
                                image='src/assets/istockphoto-1430371482-612x612.jpg'
                                title='Education for Children'
                                content='Educational institutions shape young minds, fostering knowledge, skills, and creativity.'
                            ></EventCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default EventsListPage
