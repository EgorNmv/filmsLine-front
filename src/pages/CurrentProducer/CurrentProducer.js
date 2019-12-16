import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import paths from "../../routes/paths";

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

const connectActions = {};

const mapStateToProps = state => ({});

function CurrentProducer() {

    const classes = useStyles();

    return <Container component="main" className={classes.main} maxWidth="sm">CurrentProducer</Container>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(CurrentProducer)
);