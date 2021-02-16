import {combineReducers} from "redux"
import personasReducer from "./personasReducer"
import productosReducer from "./productosReducer"

const rootReducer = combineReducers({
    personasReducer,
    productosReducer
})

export default rootReducer