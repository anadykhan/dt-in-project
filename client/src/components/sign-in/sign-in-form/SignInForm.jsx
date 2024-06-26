import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import CommonButton from '../../general/button/CommonButton';
import { useCreateSignInDataClient } from '../../../hooks/hooks/sign-in-hooks-client/SignInHooksClient';
//import '../../../assets/css/common.css'

const SignInForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const {mutate: signInUser} = useCreateSignInDataClient()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            email: '',
            password: '',
        });

        signInUser(formData)
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

export default SignInForm;
