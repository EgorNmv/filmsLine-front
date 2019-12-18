import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import {getFilmById} from "../../actions/filmActions";

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

const connectActions = {getFilmById};

const mapStateToProps = state => ({currentFilm: state.film.currentFilm});

function CurrentFilm({
                         getFilmById, currentFilm, match: {
        params: {film_id}
    }
                     }) {

    const classes = useStyles();
    useEffect(() => {
        getFilmById(film_id);
    }, []);

    return <Container component="main" className={classes.main} maxWidth="sm"
                      style={{paddingTop: 50}}>
        <div>{currentFilm.name}</div>
        <div>{currentFilm.description}</div>
    </Container>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(CurrentFilm)
);