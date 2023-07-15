'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Portfolio', link: '/portfolio' },
    { label: 'Products', link: '/products' },
    { label: 'Get a proposal', link: '/proposal' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Testimonials', link: '/testimonials' },
    { label: 'Legal', link: '/legal' },

  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'linear-gradient(50deg, #5e17eb, #5271ff)' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WebRizen
            </Typography>
            <Link href='/login'>
            <Button color="inherit">Login</Button>
            </Link>
            <Link href='/signup'>
            <Button color="inherit">Signup</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} >
        <List sx={{ width: '250px' }}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={Link} href={item.link} sx={{ padding: '10px 20px' }}>
              <ListItemText primary={item.label} onClick={toggleDrawer} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}