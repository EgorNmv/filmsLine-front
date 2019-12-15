import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {ConnectedRouter, routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {createStore, compose, applyMiddleware} from "redux";
import reducers from './reducers/index';

const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), thunk];

//TODO: remove before build prod
middlewares.push(
    createLogger({
        collapsed: true
    })
);

const store = createStore(
    reducers(history),
    compose(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
