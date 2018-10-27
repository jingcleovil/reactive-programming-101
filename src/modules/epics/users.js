import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, takeUntil, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

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
      mergeMap(action =>
        ajax.getJSON(`https://apis.github.com/users/${action.payload}`).pipe(
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