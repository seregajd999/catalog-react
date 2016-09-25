import React,
{
    Component,
    PropTypes
} from 'react';

class CatalogItemPage extends Component {
    render() {
        return (
            <div className="CatalogItemPage">
                {this.props.item.name}
            </div>
        );
    }
}

CatalogItemPage.propTypes = {

};

export default CatalogItemPage;
