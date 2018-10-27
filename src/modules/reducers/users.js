export const usersState = {
  users: [],
  data: {},
  isLoading: false,
}

export default {
  'FETCH_USERS': (state) => ({
    ...state,
    isLoading: true,
  }),
  'USERS_CANCELLED': (state) => ({
      ...state,
    isLoading: false,
  }),
  'USERS_LIST': (state, action) => ({
    ...state,
    isLoading: false,
    data: action.payload,
  })
}