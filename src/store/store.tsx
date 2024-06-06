import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer"
import { rootSaga } from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store;

// Store is the place where you initialise the project. First you create an store using createStore()
// Then proceed to creating rootReducer