import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useCreateCauseData } from '../../hooks/hooks/CausesHooks/CausesHooks';
import { useNavigate } from 'react-router-dom';

const CausesFormPageAdmin = () => {

    const {mutate: addCause} = useCreateCauseData()
    const navigate = useNavigate()

    // CauseFormAdminHandler.js
    const handleCauseFormAdminSubmit = (e) => {
        if (!e) {
            console.error('Event object is not passed');
            return;
        }

        e?.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const titleContent = form.titleContent.value;
        const description = form.description.value;
        const descriptionPoints1 = form.descriptionPoints1.value;
        const descriptionPoints2 = form.descriptionPoints2.value;
        const descriptionPoints3 = form.descriptionPoints3.value;
        const collected = form.collected.value;
        const goal = form.goal.value;
        const cardDetail = form.cardDetail.value;
        const priority = form.priority.value;

        const descriptionPoints = [
            descriptionPoints1,
            descriptionPoints2,
            descriptionPoints3
        ];

        const donators = []

        const newFormData = {
            title,
            titleContent,
            description,
            descriptionPoints,
            collected,
            goal,
            cardDetail,
            priority,
            donators
        };

        addCause(newFormData)

        navigate('/causes-table')

        console.log(newFormData);
    };


    return (
        <Box
            sx={{
                padding: 5
            }}
        >
            <form
                onSubmit={handleCauseFormAdminSubmit}>
                <TextField
                    label="ID"
                    variant="outlined"
                    name="_id"
                    //value={formData._id}
                    fullWidth
                    disabled
                    margin="normal"
                />
                <TextField
                    label="Title"
                    variant="outlined"
                    name="title"
                    //value={formData.title}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Title Content"
                    variant="outlined"
                    name="titleContent"
                    //value={formData.titleContent}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    //value={formData.description}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Points 1"
                    variant="outlined"
                    name="descriptionPoints1"
                    //value={formData.descriptionPoints.join('\n')}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Points 2"
                    variant="outlined"
                    name="descriptionPoints2"
                    //value={formData.descriptionPoints.join('\n')}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Points 3"
                    variant="outlined"
                    name="descriptionPoints3"
                    //value={formData.descriptionPoints.join('\n')}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Collected"
                    variant="outlined"
                    name="collected"
                    //value={formData.collected}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Goal"
                    variant="outlined"
                    name="goal"
                    //value={formData.goal}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Card Detail"
                    variant="outlined"
                    name="cardDetail"
                    //value={formData.cardDetail}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Priority"
                    variant="outlined"
                    name="priority"
                    //value={formData.priority}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    );
};

export default CausesFormPageAdmin;
