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
import CatalogItemPage from './pages/CatalogItemPage';
import CheckoutPage from './pages/CheckoutPage';
import CatalogListPage from './pages/CatalogListPage';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={IndexPage} />
      <Route path="/cart" component={CartPage}>
        <Route path="/cart/checkout" component={CheckoutPage} />
      </Route>
      <Route path="/catalog" component={CatalogListPage} />
      <Route path="/catalog/:itemId" component={CatalogItemPage} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
