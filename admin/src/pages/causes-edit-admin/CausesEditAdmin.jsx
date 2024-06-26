import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useGetSingleCauseData, useUpdateCauseData } from '../../hooks/hooks/CausesHooks/CausesHooks';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CausesEditAdmin = () => {

    const causeId = useParams()
    const {mutate: updateCause} = useUpdateCauseData()
    const {data: singleCauseData, isLoading: singleCauseDataLoading} = useGetSingleCauseData(causeId.id)

    if(singleCauseDataLoading){
        return <h1>Loading</h1>
    }

    console.log(singleCauseData.data)

    // CauseFormAdminHandler.js
    const handleCauseFormAdminSubmit = (e) => {
        if (!e) {
            console.error('Event object is not passed');
            return;
        }

        e?.preventDefault();
        const form = e.target;

        const _id = form._id.value
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
            _id,
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

        updateCause(newFormData)

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
                    value={singleCauseData.data._id}
                    fullWidth
                    disabled
                    margin="normal"
                />
                <TextField
                    label="Title"
                    variant="outlined"
                    name="title"
                    defaultValue={singleCauseData.data.title}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Title Content"
                    variant="outlined"
                    name="titleContent"
                    defaultValue={singleCauseData.data.titleContent}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    name="description"
                    defaultValue={singleCauseData.data.description}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal" 
                />
                <TextField
                    label="Description Points 1"
                    variant="outlined"
                    name="descriptionPoints1"
                    defaultValue={singleCauseData.data.descriptionPoints[0]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Points 2"
                    variant="outlined"
                    name="descriptionPoints2"
                    defaultValue={singleCauseData.data.descriptionPoints[1]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Points 3"
                    variant="outlined"
                    name="descriptionPoints3"
                    defaultValue={singleCauseData.data.descriptionPoints[2]}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Collected"
                    variant="outlined"
                    name="collected"
                    defaultValue={singleCauseData.data.collected}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Goal"
                    variant="outlined"
                    name="goal"
                    defaultValue={singleCauseData.data.goal}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Card Detail"
                    variant="outlined"
                    name="cardDetail"
                    defaultValue={singleCauseData.data.cardDetail}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Priority"
                    variant="outlined"
                    name="priority"
                    defaultValue={singleCauseData.data.priority}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    );
};

export default CausesEditAdmin;
