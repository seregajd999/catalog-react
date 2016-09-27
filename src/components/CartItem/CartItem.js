import React,
{
  Component,
  PropTypes
} from 'react';

import { Link }  from 'react-router';

import './CartItem.css'; 


class CartItem extends Component {
  render() {
    let item = this.props.item;

    return (
      <div className="CartItem">
        <div className="name"><Link to={'/catalog/' + item._id}>{item.name}</Link></div>
        <div className="price">{item.price}</div>
        <div className="quantity">{item.quantity}</div>
        <div className="price-total">{parseInt(item.price, 10) * item.quantity}</div>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
  })
};

export default CartItem;