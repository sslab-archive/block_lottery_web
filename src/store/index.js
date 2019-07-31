import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {createLogger} from 'redux-logger';

export default function configureStore(reducer, initialState = {}) {
    const logger = createLogger();
    const storeEnhancers = compose(
        applyMiddleware(thunk,logger)
    );

    return createStore(reducer, initialState, storeEnhancers);
}