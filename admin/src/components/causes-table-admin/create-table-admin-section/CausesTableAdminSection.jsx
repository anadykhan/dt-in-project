import React from 'react'
import CausesTableAdminBar from '../causes-table-admin-bar/CausesTableAdminBar';
import CausesTableAdminContent from '../causes-table-admin-content/CausesTableAdminContent';
import Box from '@mui/material/Box';

const CausesTableAdminSection = () => {
  return (
    <Box
    sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
    }}
    >
        <CausesTableAdminBar></CausesTableAdminBar>
        <CausesTableAdminContent></CausesTableAdminContent>
    </Box>
  )
}

export default CausesTableAdminSection
