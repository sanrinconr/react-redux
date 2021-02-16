import {NUEVO_PRODUCTO} from "../actions/personaAction"
const default_productos_reducer = {
    productos: [],
    cantidad: 0,
}
export default function productos_reducer(state = default_productos_reducer, action){
    switch(action.type){
        case NUEVO_PRODUCTO:
            return{
                ...state,
                productos: [...state.productos, action.payload]
            }
        default:
            return state
    }
}