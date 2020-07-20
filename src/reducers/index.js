import { combineReducers } from 'redux';


const valueProcessor = (state = 0, action) => {
  switch(action.type) {
    case 'VALUE_ADD':
      return state + 1;
    case 'VALUE_REDUCE':
      return state - 1;
    default:
      return state;
    };
};

export default combineReducers({
  value: valueProcessor
});