import { combineReducers } from 'redux'
import products from './products'
import updateProduct from './updateProduct'

var appReducer = combineReducers({
    products,
    updateProduct
})

export default appReducer;