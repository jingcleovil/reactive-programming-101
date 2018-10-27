import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { ping, doPing } = this.props;
    return (
      <div>
        <button onClick={doPing}>
          PING
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

const mapStateToProps = ({ ping }) => ({
  ping,
})

const mapDispatchToProps = (dispatch) => {
  const doPing = () => {
    dispatch({
      type: 'PING',
    })
  }
  return {
    doPing,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
