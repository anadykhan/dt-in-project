import { Box } from '@mui/material'
import React from 'react'
import UserDonationCard from '../../components/user-donation-card/UserDonationCard'

const UserDonations = () => {
  return (
    <Box>
        <UserDonationCard></UserDonationCard>
        <UserDonationCard></UserDonationCard>
        <UserDonationCard></UserDonationCard>
    </Box>
  )
}

export default UserDonations
