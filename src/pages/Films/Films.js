import React, {useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import paths from "../../routes/paths";
import {getAllFilms} from "../../actions/filmActions";

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

const connectActions = {getAllFilms};

const mapStateToProps = state => ({filmsList: state.film.filmsList});

function Films({getAllFilms, filmsList}) {
    const classes = useStyles();
    useEffect(() => {
        getAllFilms();
    }, []);

    return <Container component="main" className={classes.main} maxWidth="sm">
        {filmsList.length > 0 ? <div
            style={{paddingTop: 50, display: "flex", width: "100%", flexDirection: "column"}}>{filmsList.map(film => (
            <Link to={paths.CurrentFilm.toPath({film_id: film._id})} key={film._id}>
                <div
                    style={{
                        boxShadow: "1px 1px 4px -2px #000",
                        padding: 10,
                        borderRadius: 5,
                        margin: "10px 0 0 0",
                        display: "flex",
                        position: "relative"
                    }}>{film.name}</div>
            </Link>
        ))}</div> : <div>No films yet</div>}
    </Container>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(Films)
);