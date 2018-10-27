import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, takeUntil, catchError } from 'rxjs/operators';
import ajax from '../../service';

const usersList = (response) => ({
  type: 'USERS_LIST',
  payload: response,
})

const error = (error) => {
  console.log('Here', error);
}

const getUsers = (action$) => {
  return action$
    .pipe(
      ofType('FETCH_USERS'),
      map(action => {
        console.log(action);
        return {
          type: 'USERS_LIST',
          payload: action.payload,
          xdata: {
            x: 1,
          }
        };
      }),
      mergeMap(action =>
        ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
          map(usersList),
          catchError(error),
          takeUntil(action$.pipe(
            ofType('USERS_CANCELLED')
          ))
        )
      )
    );
}

export default combineEpics(
  getUsers,
)