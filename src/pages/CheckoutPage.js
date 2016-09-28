import React,
{
  Component
} from 'react';

import CheckoutForm from '../components/CheckoutForm/CheckoutForm';

const STATE = require('../State.json');


class CheckoutPage extends Component {
  render() {
    console.log("STATE.order: ", STATE.order);

    return (
      <div className="CheckoutPage">
        <h3>Оформление доставки</h3>

        <CheckoutForm client={STATE.order.client} />
      </div>
    );
  }
}

export default CheckoutPage;
