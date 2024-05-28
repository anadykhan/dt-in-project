import React from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetSingleEventData, useUpdateEventData } from '../../hooks/hooks/event-hooks/EventHooks';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const EventsEditPageAdmin = () => {
    const eventId = useParams()
    const {mutate: updateEvent} = useUpdateEventData()
    const { data: singleEventData, isLoading: singleEventDataLoading } = useGetSingleEventData(eventId.id)
    const navigate = useNavigate()


    if (singleEventDataLoading) {
        return <h1>Loading</h1>
    }

    // console.log(singleEventData.data._id)

    const handleSubmit = (e) => {


        e.preventDefault();
    
        const form = e.target;
    
        const formData = {
            _id: singleEventData.data._id,
            startTime: form.startTime.value,
            endTime: form.endTime.value,
            startDate: form.startDate.value,
            startMonth: form.startMonth.value,
            location: form.location.value,
            image: form.image.value,
            title: form.title.value,
            content: form.content.value,
            titleContent: form.titleContent.value,
            description: form.description.value,
            descriptionPoints: [form.descriptionPoint1.value, form.descriptionPoint2.value, form.descriptionPoint3.value],
            mission: form.mission.value,
            missionPoints: [form.missionPoint1.value, form.missionPoint2.value, form.missionPoint3.value, form.missionPoint4.value]
        };

        console.log(formData)

        updateEvent(formData)

        navigate('/events-table');
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
                    label="Start Time"
                    variant="outlined"
                    name="startTime"
                    defaultValue={singleEventData.data.startTime}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="End Time"
                    variant="outlined"
                    name="endTime"
                    defaultValue={singleEventData.data.endTime}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Start Date"
                    variant="outlined"
                    name="startDate"
                    defaultValue={singleEventData.data.startDate}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Start Month"
                    variant="outlined"
                    name="startMonth"
                    defaultValue={singleEventData.data.startMonth}
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
                <TextField
                    label="Image Link"
                    variant="outlined"
                    name="image"
                    defaultValue={singleEventData.data.image}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Title"
                    variant="outlined"
                    name="title"
                    defaultValue={singleEventData.data.title}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Content"
                    variant="outlined"
                    name="content"
                    defaultValue={singleEventData.data.content}
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
                    label="Mission Point 1"
                    variant="outlined"
                    name="missionPoint1"
                    defaultValue={singleEventData.data.missionPoints[0]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission Point 2"
                    variant="outlined"
                    name="missionPoint2"
                    defaultValue={singleEventData.data.missionPoints[1]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission Point 3"
                    variant="outlined"
                    name="missionPoint3"
                    defaultValue={singleEventData.data.missionPoints[2]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission Point 4"
                    variant="outlined"
                    name="missionPoint4"
                    defaultValue={singleEventData.data.missionPoints[3]}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    )
}

export default EventsEditPageAdmin
