import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ChatIcon from '@material-ui/icons/Chat';
import WarningIcon from '@material-ui/icons/Warning';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Avatar, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window, children, user } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <div id='dNav-user' className='d-flex flex-column justify-content-end'>
        <div className='mb-3'>
          <Avatar />
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='mb-0'>
            {user.firstName} {user.lastName}
          </h5>
          <IconButton>
            <ExpandMoreIcon
              style={{ color: 'white', backgroundColor: '#0acf83' }}
            />
          </IconButton>
        </div>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon className='dNav-icon' />
          </ListItemIcon>
          <ListItemText primary='Communities' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <QuestionAnswerIcon className='dNav-icon' />
          </ListItemIcon>
          <ListItemText primary='Discussions' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WarningIcon className='dNav-icon' />
          </ListItemIcon>
          <ListItemText primary='Alerts' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ChatIcon className='dNav-icon' />
          </ListItemIcon>
          <ListItemText primary='Messages' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon className='dNav-icon' />
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsActiveIcon className='dNav-icon' />
          </ListItemIcon>
          <ListItemText primary='Notifications' />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap id='dNav-logo'>
            blockwatch
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#192935',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#192935',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default ResponsiveDrawer;
