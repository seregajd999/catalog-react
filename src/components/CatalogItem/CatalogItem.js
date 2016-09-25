import React, {Component, PropTypes} from 'react';

class CatalogItem extends Component {
  render() {
  let item = this.props.item;

    return (
      <div className="CatalogItem">

        <div className="name">{item.name}</div>
        <img className="picture" src={item.picture} />
        <div className="descriprion">{item.descriprion}</div>
        <div className="price">{item.price}</div>

      </div>
    );
  }
}

CatalogItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    index: PropTypes.number,
    isActive: PropTypes.bool,
    name: PropTypes.string,
    descriprion: PropTypes.string,
    price: PropTypes.string,
    picture: PropTypes.string
  })
};

export default CatalogItem;