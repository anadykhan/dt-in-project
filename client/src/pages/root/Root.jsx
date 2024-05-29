import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import NavigationBar from "../../components/layout/navigation/NavigationBar"

const Root = () => {
  return (
    <Box
    sx={{
      width: '100%'
    }}
    >
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </Box>
  )
}
export default Root