import { Box } from '@mui/material'
import React from 'react'
import SidebarButton from '../../layouts/sidebar-button/SidebarButton'
import Sidebar from '../../layouts/sidebar/Sidebar'

const Root = () => {
  return (
    <Box
    sx={{
        display: 'flex'
    }}
    >
        <Box>
            <Sidebar></Sidebar>
            {/* <SidebarButton></SidebarButton> */}
            
        </Box>
    </Box>
  )
}

export default Root
