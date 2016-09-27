import React,
{
    Component
} from 'react';

import CartItem from '../components/CartItem/CartItem';

const STATE = require('../State.json');


class CartPage extends Component {

    componentWillMount() {
        this.cartItems = STATE.cart.map(cartItem => {
            if (!cartItem.name) {
                let product = STATE.products.find(productItem => cartItem._id === productItem._id);
                cartItem.name = product.name;
                cartItem.price = product.price;
            }

            return <CartItem item={cartItem} key={cartItem._id}></CartItem>
        });        
    }
    

    render() {
        return (
            <div className="CartPage">
                <h3>Корзина</h3>
                {this.cartItems}
            </div>
        );
    }
}

export default CartPage;
