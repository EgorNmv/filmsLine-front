import React from "react";
import {Route, Switch} from "react-router-dom";
import paths from "./paths";
import Home from "../pages/Home/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignUp from "../pages/SignUp/SignUp";
import Films from "../pages/Films/Films";
import Producers from "../pages/Producers/Producers";
import CurrentFilm from "../pages/CurrentFilm/CurrentFilm";
import CurrentProducer from "../pages/CurrentProducer/CurrentProducer";
import Admin from "../pages/Admin/Admin";

export default () => (
    <Switch>
        <Route exact path={paths.Home.url} component={Home}/>
        <Route exact path={paths.SignUp.url} component={SignUp}/>
        <Route exact path={paths.Films.url} component={Films}/>
        <Route exact path={paths.Producers.url} component={Producers}/>
        <Route exact path={paths.CurrentFilm.url} component={CurrentFilm}/>
        <Route exact path={paths.CurrentProducer.url} component={CurrentProducer}/>
        <Route exact path={paths.Admin.url} component={Admin}/>
        <Route component={NotFoundPage}/>
    </Switch>
);
