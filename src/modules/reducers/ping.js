export const pingState = {
  isPinging: false,
}

export default {
  'PING': (state, action) => {
    return {
      ...state,
      isPinging: true,
    }
  },
  'PONG': (state, action) => {
    return {
      ...state,
      isPinging: false,
    }
  }
}