import * as types from './../Contants/ActionsType';

var initialState = {
    id :'',
    name :'',
    price : '',
    status : true

};

var updateProduct = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_PRODUCT: {
            state = action.product;
            return {...state};
        }
        default: return {...state};
    }
}

export default updateProduct;