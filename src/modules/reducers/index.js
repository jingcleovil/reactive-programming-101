import { combineReducers } from 'redux';
import products, { productState } from './products';

import ping, { pingState } from './ping';
import reducermapper from '../reducermapper';

export default combineReducers({
  products: reducermapper(products, productState),
  ping: reducermapper(ping, pingState),
});