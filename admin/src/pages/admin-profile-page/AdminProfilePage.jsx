import React from 'react'
import AdminProfile from '../../components/admin-profile/AdminProfile'
import Box from '@mui/material/Box';

const AdminProfilePage = () => {
  return (
    <Box
    sx={{
        display: 'flex',
        justifyContent: 'center'
    }}
    >
      <AdminProfile></AdminProfile>
    </Box>
  )
}

export default AdminProfilePage
