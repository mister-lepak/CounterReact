import React from 'react';
import { connect } from 'react-redux';
import { addValue, reduceValue } from './actions';

const Counter = (props) => {
  return (
    <div>
      <button
        onClick={() => { props.reduceValue() }}
      >-</button>
      <h1>{props.value}</h1>
      <button
        onClick={() => { props.addValue() }}
      >+</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { value: state.value };
};


export default connect(mapStateToProps, {addValue, reduceValue})(Counter);