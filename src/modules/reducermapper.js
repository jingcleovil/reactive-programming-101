export default (actions, initState) => (state = initState, action) => {
  if (actions[action.type]) {
    return actions[action.type](state, action);
  }
  return state;
};
