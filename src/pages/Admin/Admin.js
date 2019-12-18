import React, {useEffect, useState} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import paths from "../../routes/paths";
import {TextField, Button, makeStyles} from "@material-ui/core";
import {signInAdmin, getAllUsers} from "../../actions/adminActions";
import {getAllFilms, deleteFilmById} from "../../actions/filmActions";

const connectActions = {signInAdmin, getAllFilms, deleteFilmById, getAllUsers};

const mapStateToProps = state => ({
    isSignedIn: state.auth.isSignedIn,
    userType: state.auth.user.type,
    filmsList: state.film.filmsList,
});

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

function Admin({signInAdmin, userType, isSignedIn, getAllFilms, filmsList, deleteFilmById, getAllUsers}) {
    const classes = useStyles();
    const [adminName, setAdminName] = useState(null);
    const [adminPassword, setAdminPassword] = useState(null);
    const [allUsersList, setAllUsersList] = useState([]);

    const _signInAdmin = e => {
        e.preventDefault();
        signInAdmin(adminName, adminPassword);
    };

    useEffect(() => {
        if (isSignedIn && userType === 0) {
            getAllFilms();
            getAllUsers(setAllUsersList);
        }
    }, [isSignedIn, userType]);

    return <Container component="main" className={classes.main} maxWidth="sm" style={{paddingTop: 50}}>
        {isSignedIn && userType !== 0 && (<div>Nothing interesting</div>)}
        {!isSignedIn && (<form className={classes.form} noValidate onSubmit={e => _signInAdmin(e)}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={e => setAdminName(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setAdminPassword(e.target.value)}
            />
            <Button
                style={{marginTop: 20}}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button></form>)}
        {isSignedIn && userType === 0 &&
        filmsList.length > 0 && <div
            style={{display: "flex", width: "100%", flexDirection: "column"}}>
            <span>All films</span>
            {filmsList.map(film => (
                <div key={film._id} style={{display: "flex", alignItems: "baseline"}}>
                    <Link to={paths.CurrentFilm.toPath({film_id: film._id})} style={{flex: 1}}>
                        <div
                            style={{
                                boxShadow: "1px 1px 4px -2px #000",
                                padding: 10,
                                borderRadius: 5,
                                margin: "10px 0 0 0",
                                display: "flex",
                                position: "relative"
                            }}>{film.name}</div>
                    </Link><Button variant="contained" style={{marginLeft: 20}}
                                   onClick={() => deleteFilmById(film._id)}>Delete
                    film</Button></div>
            ))}</div>}
        {isSignedIn && allUsersList.length > 0 && (
            <div
                style={{display: "flex", width: "100%", flexDirection: "column"}}>
                <span style={{marginTop: 20}}>All users</span>
                {allUsersList.map(user => (
                    <div key={user._id} style={{display: "flex", alignItems: "baseline"}}>
                        <div
                            style={{
                                boxShadow: "1px 1px 4px -2px #000",
                                padding: 10,
                                borderRadius: 5,
                                margin: "10px 0 0 0",
                                display: "flex",
                                position: "relative",
                                flex: 1
                            }}>{user.username}</div>
                        <Button variant="contained" style={{marginLeft: 20}}
                        >Delete
                            user</Button></div>
                ))}</div>
        )}
    </Container>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(Admin)
);