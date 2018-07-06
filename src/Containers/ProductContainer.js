import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../Components/ProductList/Products';
import Product from './../Components/ProductItem/Product';
import * as actions from './../Actions/index';
import { graphql } from 'react-apollo';
import ListProducts from '../aws/queries/ListProducts';

class ProductContainer extends Component {

    componentDidMount() {
        this.props.fetchRequest(this.props._products);

    }

    showProductItem = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((item, index) => {
                return <Product key={index}
                    product={item}
                    index={index}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}

                />
            })
        }
        return result;
    }

    onDelete = (data) => {
        this.props.deleteProduct(data);

    }

    onUpdate = (product) => {
        this.props.updateProduct(product);
    }

    render() {
        return (
            <div>
                <Products>
                    {this.showProductItem(this.props.products)}
                </Products>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchRequest: (products) => {
            dispatch(actions.fetchProducts(products))
        },
        deleteProduct: (product) => {
            dispatch(actions.deleteProductRequest(product))
        },
        updateProduct: (product) => {
            dispatch(actions.onUpdate(product))
        }
    }
}

const ProductContainerWithAWSData = graphql(ListProducts, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: props => ({
      _products: props.data.listProducts ? props.data.listProducts.items : [],
    })
  })(ProductContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainerWithAWSData);
