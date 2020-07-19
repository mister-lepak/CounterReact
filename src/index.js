import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './Counter';
import reducers from './reducers';

const App = () => {
  return (
    <div>
      <h1>Welcome to the counter app</h1>
      <Counter />
    </div>
  );
};

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <App />
  </Provider>
  ,
  document.querySelector('#root'));