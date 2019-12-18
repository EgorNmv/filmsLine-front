import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import paths from "../../routes/paths";
import Loading from "../Loading/Loading";

const connectActions = {};

const mapStateToProps = state => ({isSignedIn: state.auth.isSignedIn});

function AuthHandler({isSignedIn, children, history, location: {pathname}}) {
    const isHomePage = !isSignedIn && pathname === paths.Home.url;
    const isSignUpPage = !isSignedIn && pathname === paths.SignUp.url;
    const isAdminPage = !isSignedIn && pathname === paths.Admin.url;

    if (isSignedIn || isHomePage || isSignUpPage || isAdminPage) {
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