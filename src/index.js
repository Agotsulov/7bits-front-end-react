import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import store from './store/store';

import { BrowserRouter, Route } from 'react-router-dom';

import Base from './layouts/base/Base';
import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Base>
          <Route exact path='/' component={ToDo}/>
          <Route path='/done' component={Done}/>
        </Base>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
