import React,
{
  Component
} from 'react';

const STATE = require('../State.json');

let order;

class OrderItemPage extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    let orders = [...STATE.orders];
    let itemId = this.props.params.itemId;

    order = orders.find(order => order._id === itemId);

    console.log("order: ", order);
  }


  render() {
    if (order) {
      let cart = order.cart.map(item => {
        return (
          <div className="item" key={item._id}>

            Название: <span>{item.name}</span> |
            Цена: <span>{item.price}</span> |
            Количество: <span>{item.quantity}</span> |
          </div>
        );
      });

      return (
        <div className="OrderItemPage">
          <h3>Заказ номер {this.props.params.itemId}, статус: {order.status}</h3>

          <div className="client">
            <div>покупатель: {order.user.name}</div>
            <div>Адрес: {order.user.address}</div>
            <div>Телефон: {order.user.phone}</div>
            <div>Информация о доставке: {order.user.info}</div>
          </div>

          <div className="products">
            {cart}
          </div>
        </div>
      );
    } else {
      return (
        <div>Заказ {this.props.params.itemId} не найден.</div>
      );
    }
  }
}

export default OrderItemPage;
