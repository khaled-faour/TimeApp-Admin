import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { SuspenseWithPerf, AuthCheck } from 'reactfire';
import Logout from '../Authentication/Logout';


const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
                        TimeApp Admin Panel
                    </Typography>
                    <Logout />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;