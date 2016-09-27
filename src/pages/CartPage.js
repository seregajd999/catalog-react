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

                <table style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Итого</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.cartItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CartPage;
