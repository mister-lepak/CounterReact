import React from 'react';
import { connect } from 'react-redux';
import { addValue, reduceValue } from './actions';

const Counter = ({ value }) => {
  return (
    <div>
      <button
        onClick={() => { reduceValue() }}
      >-</button>
      <h1>{value}</h1>
      <button
        onClick={() => { addValue() }}
      >+</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { value: state.value }
};


export default connect(mapStateToProps, {addValue, reduceValue})(Counter);