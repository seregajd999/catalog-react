import React,
{
  Component,
  PropTypes
} from 'react';

import { Link }  from 'react-router';

import './CartItem.css'; 


class CartItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.item.quantity
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let item = this.props.item;

    item.quantity = item.quantity + 1;

    this.setState({
      quantity: item.quantity
    });
  }

  decrease() {
    let item = this.props.item;

     console.log(item.quantity);

     if (item.quantity >= 1) {
       item.quantity = item.quantity - 1;
     }

    this.setState({
      quantity: item.quantity
    });
  }

  render() {
    let item = this.props.item;

    return (
      <tr className="CartItem">
        <td className="name"><Link to={'/catalog/' + item._id}>{item.name}</Link></td>
        <td className="price">{item.price}</td>
        <td className="quantity">
          <div>{this.state.quantity}</div>
          <div className="controls">
            <button className="increase" onClick={this.increase}>+</button>
            <button className="decrease" onClick={this.decrease}>-</button>
          </div>
        </td>
        <td className="price-total">{parseInt(item.price, 10) * this.state.quantity}</td>
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