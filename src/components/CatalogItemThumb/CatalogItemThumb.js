import React, 
{
  Component, 
  PropTypes
} from 'react';

import { Link }  from 'react-router';

import './CatalogItemThumb.css';

class CatalogItemThumb extends Component {
  render() {
    let item = this.props.item;

    return (
      <div className="CatalogItemThumb">
        <div className="name">
          <Link to={'/catalog/' + item._id}>{item.name}</Link>
        </div>

        <img className="picture" src={item.picture} alt={item.name} />
        <div className="description">{item.description}</div>
        <div className="price">{item.price}</div>
      </div>
    );
  }
}

CatalogItemThumb.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    index: PropTypes.number,
    isActive: PropTypes.bool,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    picture: PropTypes.string
  })
};

export default CatalogItemThumb;
