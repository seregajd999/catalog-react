import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import App from './App';
import './index.css';

import Index from './pages/Index';
import Cart from './pages/Cart';
import CatalogItem from './pages/CatalogItem';
import Checkout from './pages/Checkout';
import CatalogList from './pages/CatalogList';
import CatalogListIndex from './pages/CatalogListIndex'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/cart" component={Cart}>
        <Route path="/checkout" component={Checkout} />
      </Route>
      <Route path="/catalog" component={CatalogList}>
        <IndexRoute component={CatalogListIndex} />
        <Route path="/:id" component={CatalogItem} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
