import React,
{
    Component,
    PropTypes
} from 'react';

import CatalogItem from '../components/CatalogItem/CatalogItem';

class CatalogItemPage extends Component {
    render() {
        return (
            <div className="CatalogItemPage">
                <CatalogItem item={this.props.item} />
            </div>
        );
    }
}

CatalogItemPage.propTypes = {
    item: PropTypes.object
};

export default CatalogItemPage;
