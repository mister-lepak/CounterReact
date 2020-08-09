import React from 'react';
import { connect } from 'react-redux';
import { addValue, reduceValue } from './actions';

const Counter = (props) => {
  return (
    <div class="row">
      <div
        class="ui button center aligned column"
        onClick={() => { props.reduceValue() }}
      >
        <i class="minus icon"/>
      </div>
      <div
        class="ui labeled center aligned column">
      <h1>
        {props.value}
      </h1>
      </div>
      <div
        class="ui button center aligned column"
        onClick={() => { props.addValue() }}
      >
        <i class="plus icon" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { value: state.value };
};


export default connect(mapStateToProps, {addValue, reduceValue})(Counter);