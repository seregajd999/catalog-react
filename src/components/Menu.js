import React, {
  Component,
  PropTypes
} from 'react';

import { Link }  from 'react-router';

import './Menu.css';


class Menu extends Component {

  render() {
    let items = this.props.items.map((item) => {
      return (
        <li key={item.url}>
          <Link to={item.url}>{item.name}</Link>
        </li>
        );
    });

    return (
      <nav className="Menu">
        <ul>{items}</ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array
};

export default Menu;
