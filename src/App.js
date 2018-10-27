import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { ping, fetchUsers, users, cancelFetch } = this.props;

    return (
      <div>
        <button
          disabled={users.isLoading}
          onClick={fetchUsers('jingcleovil')}>
          FETCH
        </button>
        <button onClick={cancelFetch}>
          CANCEL
        </button>
        <hr />
        <br/>
        <div>
          { ping.isPinging ? 'PINGING' : ''}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ping, users }) => ({
  ping,
  users,
})

const mapDispatchToProps = (dispatch) => {
  const doPing = () => {
    dispatch({
      type: 'PING',
    })
  }

  const fetchUsers = (username) => () =>
    dispatch({
      type: 'FETCH_USERS',
      payload: username,
    })

  const cancelFetch = () =>
    dispatch({
      type: 'USERS_CANCELLED',
    })

  return {
    doPing,
    fetchUsers,
    cancelFetch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
