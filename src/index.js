import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import store from './store/store';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Base from './layouts/base/Base';
import Plain from './layouts/plain/Plain';

import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';
import Login from './pages/login/Login';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' render={() => (
              <Plain>
                <Route exact path='/login' component={Login} />
              </Plain>
          )}/>
          <Route path='/' render={() => (
              <Base>
                <Route exact path='/' component={ToDo} />
                <Route exact path='/done' component={Done} />
              </Base>
          )}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
