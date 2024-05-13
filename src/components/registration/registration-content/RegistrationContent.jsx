import { Box } from '@mui/material'
import React from 'react'
import RegistrationContentBox from '../registration-content-box/RegistrationContentBox'
import RegistrationContentHeader from '../registration-content-header/RegistrationContentHeader'

import SignInForm from '../registration-form/RegistrationForm'

const RegistrationContent = () => {
  return (
    <Box>
      <RegistrationContentHeader></RegistrationContentHeader>
      <RegistrationContentBox></RegistrationContentBox>
    </Box>
  )
}

export default RegistrationContent
