import React, { useState, useEffect } from 'react';
import { Components, Icons } from '../../../../utils/material-ui';
import theme from '../../../../utils/theme';
import { NavLink, Routes, Route } from 'react-router-dom';
import clsx from 'clsx';
import styles from '../styles';

const { Toolbar, List, ListItem, ListItemText, Drawer, ListItemIcon, withStyles } = Components;
const { DirectionsCarFilledIcon } = Icons;

const SideBar = (props) => {
  const { window, handleDrawerToggle, mobileOpen, drawerWidth, classes } = props;
  const [items, setItems] = useState([]);
  const container = window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    setItems(navItems('admin'));
  }, []);

  const styled = (theme) => {
    return {
      alignContent: {
        alignSelf: 'center'
      },
      activeListItem: {
        color: theme.palette.primary.main
      },
      toolbarMargin: theme.mixins.toolbar
    };
  };

  const NavListItem = withStyles(styled)(({ classes, Icon, text, active, ...other }) => (
    <ListItem component={NavLink} {...other}>
      <ListItemIcon
        classes={{
          root: clsx({ [classes.activeListItem]: active })
        }}>
        <Icon />
      </ListItemIcon>
      <ListItemText
        classes={{
          primary: clsx({
            [classes.activeListItem]: active
          })
        }}>
        {text}
      </ListItemText>
    </ListItem>
  ));

  const NavItem = (props) => (
    <Routes>
      <Route exact path={props.to} render={() => <NavListItem active={true} {...props} />} />
      <Route path="/" render={() => <NavListItem {...props} />} />
    </Routes>
  );

  console.log(NavItem);

  const drawer = (
    <div>
      <Toolbar
        sx={{
          backgroundColor: theme.palette.primary.main
        }}>
        <img src="https://i.ibb.co/HNV3zvt/image-4-Traced.png" alt="dror" width="70" height="35" />
      </Toolbar>
      <List className={classes.drawerHeading} sx={{ color: theme.palette.common.white }}>
        <span className={classes.firstLetter}>R</span>isk
        <span className={classes.firstLetter}> A</span>nalysis
        <span className={classes.firstLetter}> M</span>achine
      </List>
      <List
        sx={{
          height: '60vh',
          overflow: 'auto',
          backgroundColor: theme.palette.primary.main,
          'overflow-x': 'hidden',
          padding: theme.spacing(-1, 1),
          color: '#FFFFFF'
        }}>
        {items.map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              <DirectionsCarFilledIcon sx={{ color: '#FFFFFF' }} />
            </ListItemIcon>
            <ListItemText primary={text?.label} />
          </ListItem>
        ))}
      </List>
      <List
        sx={{
          height: '25vh',
          backgroundColor: theme.palette.primary.main,
          padding: theme.spacing(7, 9)
        }}>
        <img
          src="https://i.ibb.co/pJGhXsc/Group-5893438.png"
          alt="brodcast"
          width="100"
          height="100"
        />
      </List>
    </div>
  );

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}>
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          }
        }}
        open>
        {drawer}
      </Drawer>
    </>
  );
};

function navItems(role) {
  switch (role) {
    case 'admin':
      return admin();
    case 'user':
      return User();
    // case 'incident':
    //   return incident();
    default:
      return null;
  }
}

function admin() {
  return [
    {
      label: 'Alerts',
      Icon: DirectionsCarFilledIcon,
      link: '/alerts'
    },
    {
      label: 'Incident Distribution',
      Icon: DirectionsCarFilledIcon,
      link: '/incident-distribution'
    },
    {
      label: 'Safety Issue Distribution',
      Icon: DirectionsCarFilledIcon,
      link: '/safety-issue-distribution'
    },
    {
      label: 'Space Management',
      Icon: DirectionsCarFilledIcon,
      link: '/space-management'
    },
    {
      label: 'Emergency Locations',
      Icon: DirectionsCarFilledIcon,
      link: '/emergency-locations'
    },
    {
      label: 'Reports',
      Icon: DirectionsCarFilledIcon,
      link: '/reports'
    },
    {
      label: 'My Calender',
      Icon: DirectionsCarFilledIcon,
      link: '/calender'
    },

    {
      label: 'Travel Doc Repository',
      Icon: DirectionsCarFilledIcon,
      link: '/travel-doc-repository'
    },
    {
      label: 'Company Profile',
      Icon: DirectionsCarFilledIcon,
      link: '/company-profile'
    },
    {
      label: 'SOS Dashboard',
      Icon: DirectionsCarFilledIcon,
      link: '/sos-dashboard'
    },
    {
      label: 'User',
      Icon: DirectionsCarFilledIcon,
      link: '/user'
    }
  ];
}

function User() {
  return [
    {
      label: 'Alerts',
      Icon: DirectionsCarFilledIcon,
      link: '/alerts'
    },
    {
      label: 'Incident Distribution',
      Icon: DirectionsCarFilledIcon,
      link: '/incident-distribution'
    },
    {
      label: 'Safety Issue Distribution',
      Icon: DirectionsCarFilledIcon,
      link: '/safety-issue-distribution'
    }
  ];
}
console.log(navItems);
export default withStyles(styles)(SideBar);
