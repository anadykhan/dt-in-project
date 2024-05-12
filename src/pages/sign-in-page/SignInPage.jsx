import { Box } from '@mui/material'
import React from 'react'
import SignInContent from '../../components/sign-in/sign-in-content/SignInContent'
import SignInForm from '../../components/sign-in/sign-in-form/SignInForm'

const SignInPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (min-width: 1025px)': {
          flexDirection: 'row'
        },
      }}
    >
      <Box
        sx={{
          '@media (min-width: 1025px)': {
            //width: '50%'
          },
        }}
      >
        <SignInContent></SignInContent>
      </Box>
      <Box
      >

        <SignInForm></SignInForm>
      </Box>
    </Box>
  )
}

export default SignInPage
