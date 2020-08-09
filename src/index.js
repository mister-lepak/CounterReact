import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './Counter';
import reducers from './reducers';

const App = () => {
  return (
    <div class="ui four column centered grid">
      <div class="row">
        <h1 class="ui dividing header">Welcome to the counter app</h1>
      </div>
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