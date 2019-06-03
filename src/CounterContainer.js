import React, { Component } from 'react';
import { connect } from 'react-redux';

const addAction = {
  type: 'ADD',
};

const addTenAction = {
  type: "ADDTEN"
}

const removeAction = {
  type: 'REMOVE',
};

const removeTenAction = {
  type: 'REMOVETEN',
};

const resetCounter = {
  type: 'RESET',
}
class CounterComponent extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <div>
        <p>{counter}</p>
        <button onClick={() => dispatch(addAction)}>
          +1
        </button>
        <button onClick={() => dispatch(addTenAction)}>
          +10
        </button>
        <button onClick={() => dispatch(removeAction)}>
          -1
        </button>
        <button onClick={() => dispatch(removeTenAction)}>
          -10
        </button>
        <button onClick={() => dispatch(resetCounter)}>
          Reset
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;