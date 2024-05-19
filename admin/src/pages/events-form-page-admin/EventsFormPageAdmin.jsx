import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useCreateEventData } from '../../hooks/hooks/event-hooks/EventHooks';

const EventsFormPageAdmin = ({ data, onSave }) => {
    const [formData, setFormData] = useState(data);
    const {mutate: addEvent} = useCreateEventData()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target

        const newFormData = {
            title: formData.title,
            titleContent: formData.titleContent,
            description: formData.description,
            descriptionPoints: [formData.descriptionPoint1, formData.descriptionPoint2, formData.descriptionPoint3],
            mission: formData.mission,
            detail: formData.detail,
            dateTime: formData.dateTime,
            location: formData.location
        };

        addEvent(newFormData)

        console.log(newFormData)
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
                    label="Detail"
                    variant="outlined"
                    name="detail"
                    //value={formData.goal}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Date and time"
                    variant="outlined"
                    name="dateTime"
                    //value={formData.cardDetail}
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
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    );
};

export default EventsFormPageAdmin;
