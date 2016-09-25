import React,
{
  Component,
  PropTypes
} from 'react';

import { Link }  from 'react-router';

class CatalogItem extends Component {
  render() {
  let item = this.props.item;
  let picture = 'http://placehold.it/650x450';

    return (
      <div className="CatalogItem">

        <div className="name">
          <Link to={'/catalog/' + item._id}>{item.name}</Link>
        </div>

        <img className="picture" src={picture} alt={item.name} />

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