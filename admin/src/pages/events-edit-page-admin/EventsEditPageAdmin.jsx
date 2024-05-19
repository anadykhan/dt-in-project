import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useGetSingleEventData, useUpdateEventData } from '../../hooks/hooks/event-hooks/EventHooks';

const EventsEditPageAdmin = () => {
    const eventId = useParams()
    const {mutate: updateEvent} = useUpdateEventData()
    const { data: singleEventData, isLoading: singleEventDataLoading } = useGetSingleEventData(eventId.id)


    if (singleEventDataLoading) {
        return <h1>Loading</h1>
    }

    console.log(singleEventData)

    const handleSubmit = (e) => {


        e.preventDefault();
        const form = e.target;

        // Extract form data
        const formData = {
            _id: singleEventData.data._id,
            title: form.title.value,
            titleContent: form.titleContent.value,
            description: form.description.value,
            descriptionPoints: [
                form.descriptionPoint1.value,
                form.descriptionPoint2.value,
                form.descriptionPoint3.value,
            ],
            mission: form.mission.value,
            detail: form.detail.value,
            dateTime: form.dateTime.value,
            location: form.location.value
        };

        console.log(formData);

        updateEvent(formData)
    };

    return (
        <Box
            sx={{
                padding: 5
            }}
        >
            <form
                onSubmit={handleSubmit}>
                {/* <TextField
                    label="ID"
                    variant="outlined"
                    name="_id"
                    //value={formData._id}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                /> */}
                <TextField
                    label="Title"
                    variant="outlined"
                    name="title"
                    defaultValue={singleEventData.data.title}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Title Content"
                    variant="outlined"
                    name="titleContent"
                    defaultValue={singleEventData.data.titleContent}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    defaultValue={singleEventData.data.description}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Point 1"
                    variant="outlined"
                    name="descriptionPoint1"
                    defaultValue={singleEventData.data.descriptionPoints[0]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Point 2"
                    variant="outlined"
                    name="descriptionPoint2"
                    defaultValue={singleEventData.data.descriptionPoints[1]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Point 3"
                    variant="outlined"
                    name="descriptionPoint3"
                    defaultValue={singleEventData.data.descriptionPoints[2]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission"
                    variant="outlined"
                    name="mission"
                    defaultValue={singleEventData.data.mission}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Detail"
                    variant="outlined"
                    name="detail"
                    defaultValue={singleEventData.data.detail}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Date and time"
                    variant="outlined"
                    name="dateTime"
                    defaultValue={singleEventData.data.dateTime}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Location"
                    variant="outlined"
                    name="location"
                    defaultValue={singleEventData.data.location}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    )
}

export default EventsEditPageAdmin
