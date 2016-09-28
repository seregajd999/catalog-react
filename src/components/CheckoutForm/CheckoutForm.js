import React,
{
  Component,
  PropTypes
} from 'react';


class CheckoutForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      client: {}
    };
  }

  componentDidMount() {
    this.setState({
      client: this.props.client
    });
  }

  render() {
    let client = this.state.client;

    return (
      <form className="CheckoutForm">

        <ul>
          <li><input type="text" name="name" placeholder="Ваше имя" value={client.value} /></li>
          <li><input type="text" name="address" placeholder="Ваш адрес" value={client.address} /></li>
          <li><input type="text" name="phone" placeholder="Ваш телефон" value={client.phone}/></li>
          <li>
            <textarea
              name="info"
              placeholder="Дополнительная информация: удобнее время доставки и тд."
              value={client.info}
            />
          </li>
        </ul>

      </form>
    );
  }
}

CheckoutForm.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    info: PropTypes.string
  })
};

export default CheckoutForm;
