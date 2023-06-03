import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store/store';
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom';

import './language/i18n';

//set mock
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
        <App />
  </Provider>
);

