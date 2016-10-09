import React, {
  Component,
  PropTypes
} from 'react';

import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Link }  from 'react-router';

import './Menu.css';


class Menu extends Component {

  render() {
    let items = this.props.items.map((item) => {
      return (
        <LinkContainer to={item.url} key={item.url}>
          <NavItem >{item.name}</NavItem>
        </LinkContainer>
        );
    });

    return (
      <Navbar className="Menu">
        <Nav>
          {items}
        </Nav>
      </Navbar>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array
};

export default Menu;
