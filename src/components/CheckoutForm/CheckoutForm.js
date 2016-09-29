import React,
{
  Component,
  PropTypes
} from 'react';


class CheckoutForm extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);

    this.state = {};
  }

  componentDidMount() {
    this.setState(Object.assign({}, this.props.client));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("e: ", e);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });

    console.log("this.state : ", this.state );
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value });
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleInfoChange(e) {
    this.setState({ info: e.target.value });
  }

  render() {

    return (
      <form
        onSubmit={this.handleSubmit}
        className="CheckoutForm">

        <ul>
          <li><input
            type="text"
            onChange={this.handleNameChange}
            name="name"
            placeholder="Ваше имя"
            value={this.state.name}/>
          </li>

          <li><input
            type="text"
            onChange={this.handleAddressChange}
            name="address"
            placeholder="Ваш адрес"
            value={this.state.address}/>
          </li>

          <li><input
            type="text"
            onChange={this.handlePhoneChange}
            name="phone"
            placeholder="Ваш телефон"
            value={this.state.phone}/></li>

          <li>
            <textarea
              name="info"
              onChange={this.handleInfoChange}
              placeholder="Дополнительная информация: удобнее время доставки и тд."
              value={this.state.info}/>
          </li>
        </ul>

        <button type="submit">Подтвердить</button>

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
