import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import {Link, withRouter} from "react-router-dom";
import paths from "../../routes/paths";
import {connect} from "react-redux";
import {dropStateOnUnauthDispatch} from "../../actions/authActions";

const connectActions = {dropStateOnUnauthDispatch};

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar({isSignedIn, dropStateOnUnauthDispatch}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Films Line
                    </Typography>
                    {isSignedIn ? <Button color="inherit" onClick={dropStateOnUnauthDispatch}>Logout</Button> :
                        <Button color="inherit"><Link style={{color: "white"}}
                                                      to={paths.Home.url}>Login</Link></Button>}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(ButtonAppBar)
);