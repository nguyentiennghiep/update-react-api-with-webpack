import React, { Component } from 'react';
import ProductContainer from './../../Containers/ProductContainer';
import { Link } from 'react-router-dom';

class ProductListPage extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' type="button" className="btn btn-info mb-10">Add Product</Link>
                <ProductContainer />
            </div>

        );
    }
}
export default ProductListPage;
