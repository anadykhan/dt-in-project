import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FiMenu } from "react-icons/fi";
import NavbarOptions from '../../../utils/NavbarOptions';
import { NavLink, useLocation } from 'react-router-dom';
import { useUserData } from '../../../provider/UserProvider';
import { useLogoutDataClient } from '../../../hooks/hooks/logout-hooks-client/LogoutHooksClient';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavigationBar(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const location = useLocation();
    const userData = useUserData();
    const { mutate } = useLogoutDataClient();

    const { sx } = props;

    const isActive = (path) => {
        return location.pathname === path;
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = async () => {
        try {
            console.log('Logout working')
            await mutate();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AppBar
            position="static"
            sx={{
                width: '100%',
                background: '#323030',
                height: 100,
                ...sx
            }}
        >
            <Container
                sx={{
                    width: '100%',
                    background: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}>
                <Toolbar
                    disableGutters
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <FiMenu />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {NavbarOptions.map((data) => (
                                <NavLink
                                    key={data.key}
                                    to={data.route}
                                    className={isActive(data.route) ? "side-nav-bar active-link" : "side-nav-bar"}
                                >
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'black', display: 'block' }}
                                    >
                                        {data.item}
                                    </Button>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>

                    <Box>
                        {userData?.userData?.data ? ( // Check if user data is available
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu}>
                                    <Avatar alt="User Avatar" src={userData.avatar || "/static/images/avatar.jpg"} />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Button color="inherit" component={NavLink} to="/sign-in">Sign In</Button>
                        )}
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavigationBar;
