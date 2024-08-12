import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tune from '@mui/icons-material/Tune';
import MenuOpen from '@mui/icons-material/MenuOpen';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const TopBar = () => {
  return (
    <Box position="static" sx={{color: '#1A1919', display: 'flex', justifyContent: 'flex-end'  }}>
        <Box sx={{ flexGrow: 1 }} /> 
        <IconButton color="inherit" aria-label="search">
            <SearchIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="search">
            <MenuOpenIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="search">
            <MoreVertIcon></MoreVertIcon>
        </IconButton>
        <IconButton color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="menu">
          <Tune />
        </IconButton>
    </Box>
  );
};

export default TopBar;
