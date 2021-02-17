import Persona from "./Persona"
import {useSelector} from "react-redux"
function Personas(){

    const personas =  useSelector((state)=>{
        return state.personasReducer.personas
    })
    const cantidad =  useSelector((state)=>{
        return state.personasReducer.cantidad
    })

    return personas.map((persona)=>{
        return <Persona 
            nombre={persona.nombre}
            apellido = {persona.apellido}
            edad = {persona.edad}
            />
    })  
}

export default Personas;

