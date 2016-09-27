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
            // Do not mutate
            cartItem = Object.assign({}, cartItem);

            if (!cartItem.name) {
                let product = STATE.products.find(productItem => cartItem._id === productItem._id);
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
        let totalPrice = this.cartItems
            .reduce((prev, current) => {
                return (prev.price * prev.quantity) + (current.price * current.quantity)
            });

        this.setState({
            totalPrice: totalPrice
        });
    }

    setItemQuantity(id, quantity) {
        let item = this.cartItems.find(item => item._id === id);

        item.quantity = quantity;

        this.setTotalPrice();
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
                            <td style={{ textAlign: 'right' }}>Итого: {this.state.totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default CartPage;
