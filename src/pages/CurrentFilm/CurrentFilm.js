import React, {useEffect} from "react";
import {withRouter, Link} from "react-router-dom";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import {getFilmById} from "../../actions/filmActions";
import paths from "../../routes/paths";

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
        <div style={{textAlign: "center"}}><img src={currentFilm.img} alt={currentFilm.name}
                                                style={{width: "100%", height: "100%"}}/></div>
        <div style={{textAlign: "center", fontSize: 30, fontWeight: 500, paddingTop: 20}}>{currentFilm.name}</div>
        <div style={{paddingTop: 20}}>{currentFilm.description}</div>
        {currentFilm.producer && currentFilm.producer.producer_id && (
            <div style={{paddingTop: 20}}>
                <Link
                    to={paths.CurrentProducer.toPath({producer_id: currentFilm.producer.producer_id})}>
                    <span style={{fontWeight: 500}}>Producer: </span>{currentFilm.producer.producer_name}
                </Link>
            </div>
        )}
        {currentFilm.start_rental && currentFilm.end_rental && (
            <div style={{paddingTop: 20}}>Film rental: {currentFilm.start_rental} to {currentFilm.end_rental}</div>)}
    </Container>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(CurrentFilm)
);