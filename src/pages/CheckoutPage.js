import React,
{
  Component
} from 'react';

import UserInfoForm from '../components/UserInfoForm/UserInfoForm';

import { mongoObjectId } from '../utils';

const STATE = require('../State.json');
let user = STATE.users.find(user => user._id === STATE.cookie_user_id);

if (!user) {
  user = {
    _id: mongoObjectId(),
    name: '',
    address: '',
    phone: '',
    info: ''
  };
}

class CheckoutPage extends Component {

  constructor(props) {
    super(props);

     this.order = STATE.orders.find((item) => {
      return (
        item.user_id === STATE.user_id &&
        item.state === "processing"
      );
    });

  }

  saveOrder(client) {
    user = Object.assign(user, client);

    let order = {
      user: user,
      cart: STATE.cart
    };

    STATE.orders.push(order);
    STATE.cart = [];

    console.log("order: ", order);
  }

  render() {
    return (
      <div className="CheckoutPage">
        <h3>Оформление доставки</h3>

        <UserInfoForm user={user} submitOrder={this.saveOrder} />
      </div>
    );
  }
}

export default CheckoutPage;
