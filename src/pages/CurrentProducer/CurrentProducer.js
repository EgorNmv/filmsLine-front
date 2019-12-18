import React, {useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import paths from "../../routes/paths";
import {getProducerById} from "../../actions/producerActions";

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

const connectActions = {getProducerById};

const mapStateToProps = state => ({currentProducer: state.producer.currentProducer});

function CurrentProducer({
                             getProducerById, currentProducer, match: {
        params: {producer_id}
    }
                         }) {

    const classes = useStyles();
    useEffect(() => {
        getProducerById(producer_id);
    }, []);

    return <Container component="main" className={classes.main} maxWidth="sm" style={{paddingTop: 50}}>
        <div style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: 500,
            paddingTop: 20
        }}>{currentProducer.username}</div>
        <div style={{paddingTop: 20}}>
            <span>Films:</span> {currentProducer.films && currentProducer.films.length > 0 && (currentProducer.films.map(film => (
            <Link to={paths.CurrentFilm.toPath({film_id: film.film_id})} key={film.film_id}>
                <div
                    style={{
                        boxShadow: "1px 1px 4px -2px #000",
                        padding: 10,
                        borderRadius: 5,
                        margin: "10px 0 0 0",
                        display: "flex",
                        position: "relative"
                    }}>{film.film_name}</div>
            </Link>
        )))}
            {currentProducer.films && currentProducer.films.length === 0 && (
                <span>This producer hasn`t films yet </span>)}</div>
    </Container>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(CurrentProducer)
);