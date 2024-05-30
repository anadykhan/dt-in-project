import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import CommonButton from '../../general/button/CommonButton';
import { useCreateRegistrationDataClient } from '../../../hooks/hooks/registration-hooks-client/RegistrationHooksClient';
//import '../../../assets/css/common.css'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const { mutate: addUserClient } = useCreateRegistrationDataClient()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            username: '',
            email: '',
            password: '',
        });
        console.log(formData);

        addUserClient(formData)

    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TextField
                label="Username"
                variant="outlined"
                name="username"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                    marginBottom: 2,
                    width: '100%'
                }}
            />
            <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{ marginBottom: 2 }}
            />
            <TextField
                type='password'
                label="Password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{ marginBottom: 2 }}
            />
            <CommonButton
                content='Sign in'
                background='#EC3C3B'
                width='100%'
                type='submit'

                sx={{
                    width: '100%',
                    '@media (min-width: 767px)': {
                        width: '30%'
                    },
                }}
            />
            {/* <Button className="in-sign-btn" variant='outlined'>Have no account?</Button> */}
        </Box>
    );
};

export default RegistrationForm;
