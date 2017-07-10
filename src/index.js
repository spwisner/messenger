import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>),
  document.getElementById('root')
);
