import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import store from './store/usersStore';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
);
