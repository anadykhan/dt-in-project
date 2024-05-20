import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useCreateEventData } from '../../hooks/hooks/event-hooks/EventHooks';
import { useCreateUserData } from '../../hooks/hooks/users-hook/UsersHook';

const UsersFormPageAdmin = ({ data, onSave }) => {
    const [formData, setFormData] = useState(data);
    const {mutate: addUser} = useCreateUserData()

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
            username: formData.username,
            password: formData.password,
            email: formData.email
        };
    
        addUser(newFormData);
    
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
                <TextField
                    label="Username"
                    variant="outlined"
                    name="username"
                    //value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    name="password"
                    //value={formData.titleContent}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    //value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    );
};

export default UsersFormPageAdmin;
