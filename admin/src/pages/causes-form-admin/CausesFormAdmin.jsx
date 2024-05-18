import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CausesFormAdmin = ({ data, onSave }) => {
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const newFormData = {
            ...formData,
        };

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
                <TextField
                    label="ID"
                    variant="outlined"
                    name="_id"
                    //value={formData._id}
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
                    label="Description Points 1"
                    variant="outlined"
                    name="descriptionPoints1"
                    //value={formData.descriptionPoints.join('\n')}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Points 2"
                    variant="outlined"
                    name="descriptionPoints2"
                    //value={formData.descriptionPoints.join('\n')}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description Points 3"
                    variant="outlined"
                    name="descriptionPoints3"
                    //value={formData.descriptionPoints.join('\n')}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Collected"
                    variant="outlined"
                    name="collected"
                    //value={formData.collected}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Goal"
                    variant="outlined"
                    name="goal"
                    //value={formData.goal}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Card Detail"
                    variant="outlined"
                    name="cardDetail"
                    //value={formData.cardDetail}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Priority"
                    variant="outlined"
                    name="priority"
                    //value={formData.priority}
                    onChange={handleChange}
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    );
};

export default CausesFormAdmin;
