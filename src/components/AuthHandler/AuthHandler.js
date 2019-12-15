import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import paths from "../../routes/paths";
import Loading from "../Loading/Loading";

const connectActions = {};

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

function AuthHandler({isSignedIn, children, history, location: {pathname}}) {
    const isHomePage = !isSignedIn && pathname === paths.Home.url;
    const isSignUpPage = !isSignedIn && pathname === paths.SignUp.url;

    if (isSignedIn || isHomePage || isSignUpPage) {
        return children
    } else {
        return <Loading/>
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(AuthHandler)
);