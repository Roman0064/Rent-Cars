import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Rent-Cars">
        <PersistGate loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

