import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink, useLocation } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import sideitem from '../../utils/sideItem'; // Importing sideItem from the separate file
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function AppbarButtonAdmin(props) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const { sx } = props;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const DrawerList = (
    <Box
      sx={{
        width: 180
      }}
      role="presentation"
      onClick={toggleDrawer(false)}>
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {sideitem.map((item, index) => (
          <ListItem
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}
            key={index}
            disablePadding>
            <NavLink
              className={isActive(item.route) ? "side-nav-bar active-link" : "side-nav-bar"}
              to={item.route}
            >
              <ListItemButton>
                <ListItemIcon sx={{ fontSize: 25 }}>
                  <item.icon /> {/* Rendering the icon component directly */}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ textDecoration: 'none' }} />
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
          color: 'white',
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
