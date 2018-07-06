import * as types from './../Contants/ActionsType';
import callApi from '../utils/apiCaller';

// export const fetchRequest = () =>{
//     return (dispatch) => {
//         return callApi('products','GET',null).then(res => {
//             dispatch(fetchProducts(res.data))
//         })
//     }
// }

export const fetchProducts = (products) =>{
    return {
        type : types.FETCH_PRODUCTS,
        products
    };
}


// export const deleteProductRequest = (product) =>{
//     return (dispatch) => {
//         return callApi(`products/${product.id}`,'DELETE',null).then(res =>{
//             dispatch(deleteProduct(product))
//         })
//     }
// }

export const deleteProduct = (product) => {
    return {
        type : types.DELETE_PRODUCT,
        product
    };
}

// export const addProductRequest = (product) =>{
//     return (dispatch) => {
//         return callApi('products','POST',product).then(res =>{
//             dispatch(addProduct(res.data))
//         });
//     };
// }

export const addProduct = (product) => {
    return {
        type : types.ADD_PRODUCT,
        product
    }
}

// export const onUpdateRequest = (product) =>{
//     return (dispatch) =>{
//         return callApi(`products/${product.id}`,'PUT',product).then(res =>{
//             dispatch(onUpdateLocal(res.data));
//         })
//     }
// }

export const onUpdateLocal = (product) => {
    return {
        type :types.UPDATE_PRODUCT_LOCAL,
        product
    }
}


export const onUpdate = (product) => {
    return {
        type :types.UPDATE_PRODUCT,
        product
    }
}