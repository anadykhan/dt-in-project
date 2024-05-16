import { Box } from '@mui/material'
import React from 'react'
import SignInContentBox from '../sign-in-content-box/SignInContentBox'
import SignInContentHeader from '../sign-in-content-header/SignInContentHeader'
import SignInForm from '../sign-in-form/SignInForm'

const SignInContent = () => {
  return (
    <Box
    >
        <SignInContentHeader></SignInContentHeader>
        <SignInContentBox></SignInContentBox>
    </Box>
  )
}

export default SignInContent
