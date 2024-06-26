import { Box } from '@mui/material'
import React from 'react'
import CauseHeader from '../cause-header/CauseHeader'
import CausesCard from '../../../causes/CausesCard'
import CommonButton from '../../../general/button/CommonButton'

const CauseSection = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6

    }}
    >
      <CauseHeader
        title='Checkout Popular Cases'
        subtitle='START DONATING FOR THEM'
      ></CauseHeader>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 5,
        flexWrap: 'wrap'
      }}
      >
        <CausesCard
          badgeContent='EDUCATION'
          badgeBackground='#E33C34'
          title='Education for all'
          cardDetail='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, totam'
          content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, totam.'
          collected='1000'
          goal='2000'
        >
        </CausesCard>
        <CausesCard
          badgeContent='EDUCATION'
          badgeBackground='#E33C34'
          cardDetail='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, totam'
          title='Education for all'
          content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, totam.'
          collected='1000'
          goal='2000'
        >
        </CausesCard>
        <CausesCard
          badgeContent='EDUCATION'
          badgeBackground='#E33C34'
          cardDetail='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, totam' 
          title='Education for all'
          content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, totam.'
          collected='1000'
          goal='2000'
        >
        </CausesCard>
      </Box>
      <CommonButton
          content='View All Causes'
          background='orange'
          width={200}
          hoverBackground='#EF5350'
          hoverColor='white'
          sx={{
            color: 'white'
          }}
        ></CommonButton>
    </Box>
  )
}

export default CauseSection
