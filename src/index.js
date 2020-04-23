import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './app/layout/index';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './app/store/configStore'

const store = configureStore()
const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  )
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
