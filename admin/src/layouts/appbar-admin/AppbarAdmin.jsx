import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const drawerWidth = 240

const AppbarAdmin = () => {
    return (
        <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Admin Panel
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppbarAdmin
