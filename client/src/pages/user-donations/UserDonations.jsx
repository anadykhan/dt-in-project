import { Box } from '@mui/material'
import React from 'react'
import UserDonationCard from '../../components/user-donation-card/UserDonationCard'
import { useGetCausesForUser } from '../../hooks/hooks/causes-hooks-client/CausesHooksClient';
import { useUserData } from '../../provider/UserProvider';

const UserDonations = () => {

  const userData = useUserData();
  const { data: userCausesData, isLoading: useCausesData } = useGetCausesForUser(userData?.userData?.data?._id)

  console.log(userCausesData?.data)

  return (


    <Box>
      {
        userCausesData?.data.map((item, index) => {
          return (
            <UserDonationCard
              key={index}
              title={item.title}
              description={item.description}
            ></UserDonationCard>
          )
        })
      }
    </Box>
  )
}

export default UserDonations
