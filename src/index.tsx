import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import AppState from './state';
import registerServiceWorker from './registerServiceWorker';

const appState = new AppState();

ReactDOM.render(
  <App store={appState}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
