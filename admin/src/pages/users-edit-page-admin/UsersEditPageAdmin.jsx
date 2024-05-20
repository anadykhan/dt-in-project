import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useGetSingleUserData, useUpdateUserData } from '../../hooks/hooks/users-hook/UsersHook';
import { useParams } from 'react-router-dom';

const UsersEditPageAdmin = ({ data, onSave }) => {
    const userId = useParams()
    const {mutate: updateUser} = useUpdateUserData()
    const { data: singleUserData, isLoading: singleUserDataLoading } = useGetSingleUserData(userId.id)

    if (singleUserDataLoading) {
        return <h1>Loading</h1>
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const newFormData = {
            _id: singleUserData.data._id,
            username: form.username.value,
            password: form.password.value,
            email: form.email.value
        };
    
        console.log(newFormData);

        updateUser(newFormData)

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
                    defaultValue={singleUserData.data.username}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    name="password"
                    defaultValue={singleUserData.data.password}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    defaultValue={singleUserData.data.email}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Save</Button>
            </form>
        </Box>
    );
};

export default UsersEditPageAdmin;
