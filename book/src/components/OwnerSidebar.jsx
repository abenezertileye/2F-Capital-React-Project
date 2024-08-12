import React from 'react';
import { Link } from 'react-router-dom';
import blueBookLogo from '../assets/blue-book-logo.png';
import { Drawer, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Box, Avatar } from '@mui/material';
import { Inbox as InboxIcon, Mail as MailIcon, SpaceDashboard as DashboardIcon, Book, AddCircle, Notifications, Settings, AccountCircle, Logout} from '@mui/icons-material';

const drawerWidth = 240;

const buttonHoverStyle = {
    '&:hover': {
      backgroundColor: 'rgba(0, 171, 255, 0.1)', 
      '& .MuiListItemIcon-root': {
        color: 'rgba(0, 171, 255, 0.7)', 
      },
    },
  };

function OwnerSidebar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth + 40}px)`,
          left: drawerWidth + 20, 
          top: '20px', 
          right: '40px', 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderRadius: '10px',
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Owner/ Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#171B36',
            color: 'white'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Toolbar>
            <div className='auth-header'>
              <Avatar src={blueBookLogo}></Avatar>
              <Typography variant="h6" noWrap component="div" sx={{color: 'rgba(0, 171, 255)'}}>
                Book Rent
              </Typography>
            </div>
          </Toolbar>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.5)', width: '80%', mx: 'auto' }} />

          <List>
            <ListItem button sx={buttonHoverStyle} component={Link} to="/owner-dashboard">
              <ListItemIcon>
                <DashboardIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button sx={buttonHoverStyle} component={Link} to="/book-upload">
              <ListItemIcon>
                <Book sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Book Upload" />
            </ListItem>

            <ListItem button sx={buttonHoverStyle}>
              <ListItemIcon>
                <AddCircle sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Other" />
            </ListItem>

            <ListItem button sx={buttonHoverStyle}>
              <ListItemIcon>
                <AddCircle sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Other" />
            </ListItem>

            <ListItem button sx={buttonHoverStyle}>
              <ListItemIcon>
                <AddCircle sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Other" />
            </ListItem>
          </List>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.5)', width: '80%', mx: 'auto' }} />

          <List>
            <ListItem button sx={buttonHoverStyle}>
              <ListItemIcon>
                <Notifications sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItem>

            <ListItem button sx={buttonHoverStyle}>
              <ListItemIcon>
                <Settings sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItem>

            <ListItem button sx={buttonHoverStyle}>
              <ListItemIcon>
                <AccountCircle sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Login as Admin" />
            </ListItem>
          </List>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.5)', width: '80%', mx: 'auto' }} />
        </Box>

        <Box>
          <List button sx={{backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '0px 15px 25px 15px', borderRadius: '10px'}}>
            <ListItem button sx={{ height: '40px', padding: '8px 16px' }}>
              <ListItemIcon>
                <Logout sx={{ color: 'white' }}/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default OwnerSidebar;
