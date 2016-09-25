import React, 
{
  Component, 
  PropTypes
} from 'react';

import { Link }  from 'react-router';

class CatalogItemThumb extends Component {
  render() {
    let item = this.props.item;

    return (
      <div className="CatalogItemThumb">
        <div className="name">
          <Link to={'/catalog/' + item._id}>{item.name}</Link>
        </div>

        <img className="picture" src={item.picture} alt={item.name} />
        <div className="descriprion">{item.descriprion}</div>
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
    descriprion: PropTypes.string,
    price: PropTypes.string,
    picture: PropTypes.string
  })
};

export default CatalogItemThumb;