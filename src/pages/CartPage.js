import React,
{
  Component
} from 'react';

import CartItem from '../components/CartItem/CartItem';

const STATE = require('../State.json');


class CartPage extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      totalPrice: 0
    };
    
    this.setItemQuantity = this.setItemQuantity.bind(this);
    
    this.cartItems = STATE.cart.map(cartItem => {
      
      let product = STATE.products.find(productItem => cartItem._id === productItem._id);
  
      if (product) {
        cartItem.name = product.name;
        cartItem.price = product.price;
      }
      
      return cartItem;
    });
    
    this.cartItemsComponents = this.cartItems.map(cartItem => {
      return (
        <CartItem
          setItemQuantity={this.setItemQuantity}
          item={cartItem}
          key={cartItem._id}
        />)
    });
  }
  
  componentDidMount() {
    this.setTotalPrice();
  }
  
  setTotalPrice() {
    let totalPrice = 0;
    
    this.cartItems.forEach(item => {
      totalPrice += (item.price * item.quantity);
    });
    
    this.setState({
      totalPrice: totalPrice
    });
  }
  
  setItemQuantity(id, quantity) {
    let item = this.cartItems.find(item => item._id === id);
    
    item.quantity = quantity;
    
    this.setTotalPrice();
  
    // Update state
    STATE.cart = this.cartItems;
  }
  
  render() {
    return (
      <div className="CartPage">
        <h3>Корзина</h3>
        
        <table style={{ width: '100%' }}>
          <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
          </tr>
          </thead>
          
          <tbody>
          {this.cartItemsComponents}
          </tbody>
          
          <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ textAlign: 'right' }}>
              Итого: <span className="total">{this.state.totalPrice}</span>
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default CartPage;
