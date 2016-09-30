import React,
{
  Component
} from 'react';

const STATE = require('../State.json');

class OrderItemPage extends Component {
  render() {
    console.log("this.props.params: ", this.props.params);
    
    return (
      <h3>OrderItemPage</h3>
    );
    
  }
}

export default OrderItemPage;
