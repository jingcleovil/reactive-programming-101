import { combineEpics } from 'redux-observable';

import products from './products';
import ping from './ping';
import users from './users';

export default combineEpics(
  ping,
  users,
)