import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <Box
    sx={{
      width: '100%'
    }}
    >
      <Outlet></Outlet>
    </Box>
  )
}
export default Root