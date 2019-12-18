import React, {useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import {makeStyles} from '@material-ui/core/styles';
import paths from "../../routes/paths";
import {getAllProducers} from "../../actions/producerActions";

const useStyles = makeStyles(theme => ({
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    }
}));

const connectActions = {getAllProducers};

const mapStateToProps = state => ({producersList: state.producer.producersList});

function Producers({getAllProducers, producersList}) {

    const classes = useStyles();
    useEffect(() => {
        getAllProducers();
    }, []);

    return <Container component="main" className={classes.main} maxWidth="sm" style={{paddingTop: 50}}>
        <span style={{fontSize: 30, fontWeight: 500}}>Producers</span>
        {producersList.length > 0 ? <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "column"
            }}>{producersList.map(producer => (
            <Link to={paths.CurrentProducer.toPath({producer_id: producer._id})} key={producer._id}>
                <div
                    style={{
                        boxShadow: "1px 1px 4px -2px #000",
                        padding: 10,
                        borderRadius: 5,
                        margin: "10px 0 0 0",
                        display: "flex",
                        position: "relative"
                    }}>{producer.username}</div>
            </Link>
        ))}</div> : <div>No producers yet</div>}</Container>
}

export default withRouter(
    connect(
        mapStateToProps,
        connectActions
    )(Producers)
);