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

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

function Home({isSignedIn}) {

    const classes = useStyles();

    return isSignedIn ? <Container component="main" className={classes.main} maxWidth="sm">
        <div style={{paddingTop: 50, display: "flex", width: "100%", flexDirection: "column"}}>
            <Link to={paths.Films.toPath()}>
                <div style={{
                    boxShadow: "1px 1px 4px -2px #000",
                    padding: 10,
                    borderRadius: 5,
                    margin: "10px 0 0 0",
                    display: "flex",
                    position: "relative"
                }}>Films
                </div>
            </Link>
            <Link
                to={paths.Producers.toPath()}>
                <div style={{
                    boxShadow: "1px 1px 4px -2px #000",
                    padding: 10,
                    borderRadius: 5,
                    margin: "10px 0 0 0",
                    display: "flex",
                    position: "relative"
                }}>Producers
                </div>
            </Link>
        </div>
    </Container> : <div style={{padding: 50}}><SignInForm/></div>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(Home)
);