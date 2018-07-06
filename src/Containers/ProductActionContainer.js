import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';
import ProductActionPage from '../Pages/ProductActionPage/ProductActionPage';
import uuidV4 from 'uuid/v4';
import CreateProduct from './../aws/mutations/CreateProduct';
import ListProducts from '../aws/queries/ListProducts';
import { graphql } from 'react-apollo';

class ProductActionContainer extends Component {

    onSubmit = (product) => {
        if (product.id) {
            this.props.updateProductLocal(product);
        }
        else {
            this.props.addProductRequest(product);
            this.props.onAdd({
                id: uuidV4(),
                name: product.name,
                price: product.price,
                status: product.status
              })
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
            dispatch(actions.addProduct(product))
        },
        updateProductLocal: (product) => {
            dispatch(actions.onUpdateRequest(product))
        }
    }
}

const ProductActionContainerWithAWSData = graphql(CreateProduct, {
    props: props => ({
      onAdd: product => props.mutate({
        variables: product,
        optimisticResponse: {
          __typename: 'Mutation',
          createProduct: { ...product,  __typename: 'Product' }
        },
        update: (proxy, { data: { createProduct } }) => {
          const data = proxy.readQuery({ query: ListProducts });
          data.listProducts.items.push(createProduct);
          proxy.writeQuery({ query: ListProducts, data });
        }
      })
    })
  })(ProductActionContainer)
  

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionContainerWithAWSData);
