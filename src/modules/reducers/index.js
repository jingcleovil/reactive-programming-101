import { combineReducers } from 'redux';

import products, { productState } from './products';
import ping, { pingState } from './ping';
import users, { usersState } from './users';

import map from '../reducermapper';

export default combineReducers({
  products: map(products, productState),
  ping: map(ping, pingState),
  users: map(users, usersState),
});