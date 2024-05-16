import { Outlet } from 'react-router'
import SiderAdmin from '../layouts/sider-admin/SiderAdmin'
import Box from '@mui/material/Box';


const RootAdmin = () => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {/* <AppbarAdmin></AppbarAdmin> */}
      <SiderAdmin></SiderAdmin>
      <Outlet></Outlet>
    </Box>
  )
}

export default RootAdmin
