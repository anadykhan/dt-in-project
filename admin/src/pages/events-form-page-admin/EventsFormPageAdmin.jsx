import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useCreateEventData } from '../../hooks/hooks/event-hooks/EventHooks';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const EventsFormPageAdmin = ({ data, onSave }) => {
    const [formData, setFormData] = useState(data);
    const {mutate: addEvent} = useCreateEventData()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
    
        const form = e.target;
    
        const newFormData = {
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
    
        addEvent(newFormData);
    
        navigate('/events-table');
    
        console.log(newFormData);
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
                    //value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="End Time"
                    variant="outlined"
                    name="endTime"
                    //value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Start Date"
                    variant="outlined"
                    name="startDate"
                    //value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Start Month"
                    variant="outlined"
                    name="startMonth"
                    //value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Location"
                    variant="outlined"
                    name="location"
                    //value={formData.priority}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Image Link"
                    variant="outlined"
                    name="image"
                    //value={formData.priority}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Title"
                    variant="outlined"
                    name="title"
                    //value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Content"
                    variant="outlined"
                    name="content"
                    //value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Title Content"
                    variant="outlined"
                    name="titleContent"
                    //value={formData.titleContent}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    //value={formData.description}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Point 1"
                    variant="outlined"
                    name="descriptionPoint1"
                    //value={formData.descriptionPoints.join('\n')}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Point 2"
                    variant="outlined"
                    name="descriptionPoint2"
                    //value={formData.descriptionPoints.join('\n')}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Point 3"
                    variant="outlined"
                    name="descriptionPoint3"
                    //value={formData.descriptionPoints.join('\n')}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission"
                    variant="outlined"
                    name="mission"
                    //value={formData.collected}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission Point 1"
                    variant="outlined"
                    name="missionPoint1"
                    //value={formData.collected}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission Point 2"
                    variant="outlined"
                    name="missionPoint2"
                    //value={formData.collected}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission Point 3"
                    variant="outlined"
                    name="missionPoint3"
                    //value={formData.collected}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mission Point 4"
                    variant="outlined"
                    name="missionPoint4"
                    //value={formData.collected}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    );
};

export default EventsFormPageAdmin;
