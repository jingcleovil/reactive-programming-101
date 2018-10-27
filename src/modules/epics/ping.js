import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

const PING = 'PING';
const PONG = 'PONG';

const pong = () => ({ type: PONG });

export default (action$) => {
  return action$
    .pipe(
      ofType(PING),
      delay(2000),
      mapTo(pong()),
    );
}