import { combineEpics } from 'redux-observable';

import products from './products';
import ping from './ping';

export default combineEpics(
  ping,
)