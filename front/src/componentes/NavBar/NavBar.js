import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="grey">
        <Toolbar>
        <Link to='Home' >
          <FastfoodIcon
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </FastfoodIcon>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Principal
          </Typography>
          
          
          <Link to='Finalizar' >
          <ShoppingCartIcon
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </ShoppingCartIcon>
          </Link>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}