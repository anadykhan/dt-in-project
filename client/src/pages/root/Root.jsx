import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <Box>
      <Outlet></Outlet>
    </Box>
  )
}
export default Root