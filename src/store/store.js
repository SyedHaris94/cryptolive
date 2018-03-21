import {createStore , applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import GlobalReducer from '../store/reducers/globalReducer'
import GraphTableReducer from '../store/reducers/graphTableReducer'
import BitcoinReducer from '../store/reducers/bitcoinReducer'
import AuthReducer from '../store/reducers/authReducers'
import RateReducer from '../store/reducers/ratingReducer'
import CryptoReducer from '../store/reducers/cryptoReducer'
import ICOReducer from '../store/reducers/icoReducer'

let middleware = applyMiddleware(thunk)
let store = createStore( combineReducers({
    GraphTableReducer, GlobalReducer, BitcoinReducer, AuthReducer, 
    RateReducer,CryptoReducer,ICOReducer
}), middleware)


store.subscribe(() => {
    console.log("STORE CHANGED", store.getState())
})
export default store;