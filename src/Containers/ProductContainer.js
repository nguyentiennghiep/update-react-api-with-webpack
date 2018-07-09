import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../Components/ProductList/Products';
import Product from './../Components/ProductItem/Product';
import * as actions from './../Actions/index';
import { graphql, compose } from 'react-apollo';
import ListProducts from '../aws/queries/ListProducts';
import DeleteProduct from '../aws/mutations/DeleteProduct'
import NewProductSubscription from './../aws/subscriptions/NewProductSubscription';

class ProductContainer extends Component {

    componentWillMount() {
        this.props.subscribeToNewProduct();
    }

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
        this.props.deleteProductLocal(data);
        this.props.onDeleteProduct(data);
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
        deleteProductLocal: (product) => {
            dispatch(actions.deleteProduct(product))
        },
        updateProduct: (product) => {
            dispatch(actions.onUpdate(product))
        }
    }
}

const ProductContainerWithAWSData = compose(
    graphql(ListProducts, {
        options: {
            fetchPolicy: 'cache-and-network'
        },
        props: props => ({
            _products: props.data.listProducts ? props.data.listProducts.items : [],
            // START - NEW PROP :
            subscribeToNewProduct: params => {
                props.data.subscribeToMore({
                    document: NewProductSubscription,
                    updateQuery: (prev, { subscriptionData: { data : { onCreateProduct } } }) => ({
                        ...prev,
                        listProducts: { items: [onCreateProduct, ...prev.listProducts.items.filter(product => product.id !== onCreateProduct.id)], __typename: 'ProductConnection' }
                    })
                });
            },
        })
    }),
    graphql(DeleteProduct, {
        props: props => ({
            onDeleteProduct: (product) => props.mutate({
                variables: { id: product.id },
                optimisticResponse: () => ({ deleteProduct: { ...product, __typename: 'Product' } }),
            })
        }),
        options: {
            refetchQueries: [{ query: ListProducts }],
            update: (proxy, { data: { deleteProduct: { id } } }) => {
                const query = ListProducts;
                const data = proxy.readQuery({ query });
                data.listProducts.items = data.listProducts.items.filter(product => product.id !== id);
                proxy.writeQuery({ query, data });
            }
        }
    }),

)(ProductContainer);


export default connect(mapStateToProps, mapDispatchToProps)(ProductContainerWithAWSData);
