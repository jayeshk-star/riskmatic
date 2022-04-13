import React from 'react';
import HeaderWithDrawer from '../components/organism/HeaderWithDrawer';
import User from '../pages/User';
import { Components } from './material-ui';

const { Box, Toolbar } = Components;

const drawerWidth = 240;
const Screen = (title, Component) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderWithDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}>
        <Toolbar />
        <User />
      </Box>
    </Box>
  );
};

export default Screen;
