import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../Components/ProductList/Products';
import Product from './../Components/ProductItem/Product';
import * as actions from './../Actions/index';

class ProductContainer extends Component {

    componentDidMount()
    {
       this.props.fetchRequest();
        
    }




    showProductItem = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((item, index) => {
                return <Product key={index}
                    product={item}
                    index={index}
                    onDelete = {this.onDelete}
                    onUpdate = {this.onUpdate}
                   
                />
            })
        }
        return result;
    }

    onDelete = (data) =>{
        this.props.deleteProduct(data);  
        
    }

    onUpdate = (product) =>{
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

const mapDispatchToProps = (dispatch,props) =>{
    return {
        fetchRequest : () =>{
            dispatch(actions.fetchRequest())
        },
        deleteProduct : (product) =>{
            dispatch(actions.deleteProductRequest(product))
        },
        updateProduct : (product) =>{
            dispatch(actions.onUpdate(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
