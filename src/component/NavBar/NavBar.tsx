import React, {Component} from 'react';
import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class NavBar extends Component {
    render() {
        return (
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Список дел на сегодня
                    </Typography>
                </Toolbar>
            </AppBar>
        )
            ;
    }
}

export default NavBar
