import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleWare from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers';
import epics from './epics';

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const createStoreWithMiddleware = applyMiddleware(
    epicMiddleware
  )(createStore);

  const store = createStoreWithMiddleware(reducers, {});
  epicMiddleware.run(epics);

  return store;
}