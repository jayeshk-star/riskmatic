import React from 'react';
import { Components } from '../../../utils/material-ui';
import { StyledEngineProvider } from '@mui/material/styles';

// import DrawerHome from './Drawer';
// import Header from './Header';
import styles from './styles';
import SideBar from './Drawer';
import Header from './Header';

const { withStyles, Box } = Components;

const drawerWidth = 260;
const HeaderWithDrawer = withStyles(styles)(({ classes }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <StyledEngineProvider injectFirst>
      <Box sx={{ display: 'flex' }}>
        <Header handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders">
          <SideBar
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            drawerWidth={drawerWidth}
          />
        </Box>
      </Box>
    </StyledEngineProvider>
  );
});

export default HeaderWithDrawer;
