import Persona from "./Persona"
export default function Personas({personas}){
    return personas.map((persona)=>{
        console.log(persona.nombre)
        return <Persona 
            nombre={persona.nombre}
            apellido = {persona.apellido}
            edad = {persona.edad}
            />
    })
    
}