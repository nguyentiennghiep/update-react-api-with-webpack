import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';
import ProductActionPage from '../Pages/ProductActionPage/ProductActionPage';

class ProductActionContainer extends Component {

    onSubmit = (product) => {
        if (product.id) {
            this.props.updateProductLocal(product);
        }
        else {
            this.props.addProductRequest(product);
        }
    }

    render() {
        return (
            <div>
                <ProductActionPage onSubmit={this.onSubmit} data={this.props.match} updateProduct={this.props.updateProduct} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        updateProduct: state.updateProduct
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProductRequest: (product) => {
            dispatch(actions.addProductRequest(product))
        },
        updateProductLocal: (product) => {
            dispatch(actions.onUpdateRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionContainer);
