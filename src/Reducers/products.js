import * as types from './../Contants/ActionsType';

var initialState = [];

var index = -1;
var findIndex = (state, product) => {
    var result = -1;
    state.forEach((item, index) => {
        if (item.id === product.id) {
            result = index;
        }
    })

    return result;
}
var products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS: {
            state = action.products;
            return [...state];
        }
        case types.ADD_PRODUCT: {
            
            state.push(action.product);
            return [...state];
        }
        case types.DELETE_PRODUCT:
            {
                index = findIndex(state, action.product);
                if (index !== -1) {
                    state.splice(index,1);
                }
                return [...state];
            }
        case types.UPDATE_PRODUCT_LOCAL : {
            index = findIndex(state, action.product);
            if (index !== -1) {
                state[index] = action.product;
            }
            return [...state];
        }
        default: return [...state];
    }
}

export default products;