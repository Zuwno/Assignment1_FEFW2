import { legacy_createStore as creatStore ,combineReducers} from 'redux'
import { productReducers } from '../reducers/productReducers'
const rootReducer = combineReducers({
    product: productReducers
})
const store  =  creatStore(rootReducer)
export default store