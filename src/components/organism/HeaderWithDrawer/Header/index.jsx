import React, { useEffect, useState } from 'react';
import { Components, Icons } from '../../../../utils/material-ui';
import styles from '../styles';
import moment from 'moment';

const { AppBar, Toolbar, Typography, Box, IconButton, Tooltip, Avatar, withStyles } = Components;
const { MenuIcon } = Icons;

const Header = ({ classes, handleDrawerToggle, drawerWidth }) => {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment(new Date()).format('h:mm:ss a'));
    }, 1000);
  }, [currentTime]);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 10, display: { xs: 'none', md: 'flex' }, fontSize: '1.6rem' }}>
          <span className={classes.dashboardLabel}>Ram</span>Dashboard
        </Typography>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <span className={classes.dashboardLabel}>Ram</span> Dashboard
        </Typography>

        <Typography className={classes.smallHeading1} justifyContent="flex-end">
          {moment(new Date()).format('DD/MM/YYYY')}
        </Typography>
        <Typography className={classes.smallHeading}>
          <span> Time </span>
          {currentTime}
        </Typography>
        <Typography className={classes.smallHeading}> | </Typography>
        <Box>
          <Typography className={classes.smallHeading}>Ankit</Typography>
          <Typography className={classes.smallHeading}>Sign Out</Typography>
        </Box>

        <Tooltip title="Open settings">
          <IconButton>
            <Avatar
              alt="Virat"
              src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
            />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(styles)(Header);
