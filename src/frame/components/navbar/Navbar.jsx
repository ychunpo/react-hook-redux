import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
//import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { titleList } from './data/titleName';
import Logo from '../logo/Logo';

//const navItems = ['Home', 'About', 'Contact'];

function Navbar(props) {
  //const { window } = props;
  const navigation = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List >
        {titleList.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                textTransform: 'capitalize'
              }}
              onClick={() => navigation(item.link)}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: 18,
                  fontWeight: 'medium',
                }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ backgroundColor: '#FFF' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <Logo />
            <Typography variant="h5" sx={{ color: 'black', ml: 1 }}>
              React Book
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {titleList.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: '#000',
                  textTransform: 'capitalize',
                  fontSize: '1.2rem'
                }}
                onClick={() => navigation(item.link)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}

// Navbar.propTypes = {
//   window: PropTypes.func,
// };

export default Navbar;