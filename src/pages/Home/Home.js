import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

const connectActions = {};

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

function Home({isSignedIn}) {

    const classes = useStyles();

    return isSignedIn ? <Container component="main" className={classes.main} maxWidth="sm">
        <div>HOOOLAAAAAAAAAAAAAAAAAAAAAAAA!</div>
    </Container> : <div style={{padding: 50}}><SignInForm/></div>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(Home)
);