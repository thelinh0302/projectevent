import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/index';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(<App />, rootEl)
}

if (module.hot) {
  module.hot.accept('./app/layout/index', () => {
    setTimeout(render)
  })
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
