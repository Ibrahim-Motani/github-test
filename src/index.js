import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// provider import
import Provider from './store/repos-context';

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

