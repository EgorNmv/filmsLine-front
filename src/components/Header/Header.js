import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, IconButton, Icon} from "@material-ui/core";
import {Link} from "react-router-dom";
import paths from "../../routes/paths";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Icon>menu</Icon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Films Line
                    </Typography>
                    <Button color="inherit"><Link style={{color: "white"}} to={paths.Home.url}>Login</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}