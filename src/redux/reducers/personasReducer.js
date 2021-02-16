import {NUEVA_PERSONA} from "../actions/personaAction"
const default_personas_reducer = {
    personas:[],
    cantidad: 0
}
export default function personas_reducer(state = default_personas_reducer, action){
    switch(action.type){
        case NUEVA_PERSONA:
            return {
                ...state,
                personas: [...state.personas, action.payload],
                cantidad: state.cantidad+1,
            }
        default: return state
    }
}