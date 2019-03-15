import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Base from './layouts/base/Base';
import ToDo from './pages/todo/ToDo';
import Done from './pages/done/Done';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Base>
            <Route exact path='/' component={ToDo}/>
            <Route path='/done' component={Done}/>
        </Base>
    </BrowserRouter>,
    document.getElementById('root')
);
