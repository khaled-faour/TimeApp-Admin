import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { MainListItems } from './listItems';
import Logout from '../Authentication/Logout';
import Users from './Users';
import { Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import Tasks from './Tasks'
import Chart from './Chart'
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import AddTask from './AddTask'
import EditTask from './EditTask'
import Notifications from './Notifications'
import { useHistory } from 'react-router-dom'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = useState(false);


    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawer}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        TimeApp Admin Dashboard
                    </Typography>

                    <IconButton color="inherit" onClick={() => history.push('/dashboard/Notifications')}>
                        <Badge variant="dot" color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <MainListItems />
                </List>
                <Divider />
                <List>
                    <Logout />
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />

                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Switch>
                            <Route exact path="/dashboard">
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Notifications numberOfNotifications={5} />
                                    </Paper>
                                </Grid>
                                {/* List Number of Users*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Users numberOfUsers={5} />
                                    </Paper>
                                </Grid>
                                {/* Chart*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Chart />
                                    </Paper>
                                </Grid>
                            </Route>
                            <Route exact path="/dashboard/Notifications">
                                {/* List All Notifications*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Notifications />
                                    </Paper>
                                </Grid>
                            </Route>
                            <Route exact path="/dashboard/users">
                                {/* List  All Users*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Users />
                                    </Paper>
                                </Grid>
                            </Route>
                            <Route exact path="/dashboard/categories">
                                {/* List Categories */}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Categories />
                                    </Paper>
                                </Grid>
                            </Route>


                            <Route exact path="/dashboard/Category/:categoryName/:categoryId">
                                {/* List Tasks*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Tasks />
                                    </Paper>
                                </Grid>
                            </Route>

                            <Route exact path="/dashboard/Category/Add">
                                {/* Add Category*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <AddCategory />
                                    </Paper>
                                </Grid>
                            </Route>

                            <Route exact path="/dashboard/Category/:categoryName/:categoryId/Edit">
                                {/* Edit Category*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <EditCategory />
                                    </Paper>
                                </Grid>
                            </Route>

                            <Route exact path="/dashboard/Category/:categoryName/:categoryId/Task/Add">
                                {/* Add Task*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <AddTask />
                                    </Paper>
                                </Grid>
                            </Route>
                            <Route exact path="/dashboard/Category/:categoryName/:categoryId/Task/:taskId/Edit">
                                {/* Edit Task*/}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <EditTask />
                                    </Paper>
                                </Grid>
                            </Route>






                        </Switch>
                    </Grid>
                    {/*Chart */}
                    {/* <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Chart />
                        </Paper>
                    </Grid> */}
                    <Box pt={4}>
                    </Box>
                </Container>

            </main>
        </div>
    );
}

export default Dashboard;