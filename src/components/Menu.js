import React, { Component } from 'react';
import { Link }  from 'react-router';

import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <nav className="Menu">
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <Link to="/cart">Корзина</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
