import { Box } from '@mui/material'
import React from 'react'
import RegistrationContent from '../../components/registration/registration-content/RegistrationContent'
import RegistrationForm from '../../components/registration/registration-form/RegistrationForm'

const RegistrationPage = () => {
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
        '@media (min-width: 1200px)': {
            width: 1100,
            margin: 'auto'
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
        <RegistrationContent></RegistrationContent>
      </Box>
      <Box
      sx={{
        width: '100%'
      }}
      >
        <RegistrationForm></RegistrationForm>
      </Box>
    </Box>
  )
}

export default RegistrationPage
