import React,
{
    Component
} from 'react';

import CatalogItemPage from './CatalogItemPage';

const STATE = require('../State.json');

class CatalogListPage extends Component {
    render() {
        let items = STATE.products.map((item) => {
            return <CatalogItemPage item={item} key={item._id} />;
        });

        return (
            <div className="CatalogListPage">
               {items}
            </div>
        );
    }
}

CatalogListPage.propTypes = {

};

export default CatalogListPage;
