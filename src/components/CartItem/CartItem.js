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
      <tr className="CartItem">
        <td className="name"><Link to={'/catalog/' + item._id}>{item.name}</Link></td>
        <td className="price">{item.price}</td>
        <td className="quantity">{item.quantity}</td>
        <td className="price-total">{parseInt(item.price, 10) * item.quantity}</td>
      </tr>
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