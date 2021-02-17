import React, { useState } from "react"
export default function FormPersona(){
    const [input, setInput] = useState({
        nombre:"",
        apellido:"",
        edad:"",
    })

    function handleChange(event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <form>
                <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="nombre" onChange={handleChange} value={input.nombre}/>
                </div>
               
                <div>
                <label htmlFor="secondName">Apellido:</label>
                <input type="text" name="apellido" onChange={handleChange} value={input.apellido}/>
                </div>
               
                <div>
                <label htmlFor="age">Edad:</label>
                <input type="text" name="edad" onChange={handleChange} value={input.edad}/>
                </div>

            </form>
        </div>
    )
}