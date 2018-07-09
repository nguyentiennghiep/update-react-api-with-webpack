import * as types from './../Contants/ActionsType';

export const fetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    };
}


export const deleteProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT,
        product
    };
}


export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const onUpdateLocal = (product) => {
    return {
        type: types.UPDATE_PRODUCT_LOCAL,
        product
    }
}


export const onUpdate = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}