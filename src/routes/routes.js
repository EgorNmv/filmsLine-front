import React from "react";
import {Route, Switch} from "react-router-dom";
import paths from "./paths";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignUp from "../pages/SignUp/SignUp";

export default () => (
    <Switch>
        <Route exact path={paths.Home.url} component={Home}/>
        <Route exact path={paths.SignUp.url} component={SignUp}/>
        <Route component={NotFoundPage}/>
    </Switch>
);
