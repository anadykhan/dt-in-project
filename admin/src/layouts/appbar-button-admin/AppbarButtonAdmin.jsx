import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";


export default function AppbarButtonAdmin(props) {
  const [open, setOpen] = React.useState(false);

  const { sx } = props

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const routes = [
    '/causes-table',
    '/events-table',
    '/users-table'
  ]

  const DrawerList = (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}>
      <List>
        {['Causes', 'Events', 'Users', 'Logout'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding>
            <NavLink
              to={`${routes[index]}`}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ textDecoration: 'none' }} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
    >
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          fontSize: 25,
          ...sx
        }}
      ><CiMenuBurger></CiMenuBurger>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
