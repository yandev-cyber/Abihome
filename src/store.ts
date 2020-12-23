import { createStore, applyMiddleware } from 'redux';
import createSagaMiddlewware from 'redux-saga';
import appReducer from './reducers';
import mainSaga from './sagas';

const sagaMiddleware = createSagaMiddlewware();

const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);

export default store;
