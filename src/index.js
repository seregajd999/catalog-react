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

import IndexPage from './pages/IndexPage';

import CartPage from './pages/CartPage';

import CheckoutPage from './pages/CheckoutPage';

import CatalogItemPage from './pages/CatalogItemPage';
import CatalogListPage from './pages/CatalogListPage';
import CatalogListIndexPage from './pages/CatalogListIndexPage';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/cart" component={CartPage}>
        <Route path="/cart/checkout" component={CheckoutPage} />
      </Route>
      <Route path="/catalog">
        <IndexRoute component={CatalogListIndexPage} />
        <Route path="/catalog/:categoryId" component={CatalogListPage} />
      </Route>
      <Route path="/catalog/:itemId" component={CatalogItemPage} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
