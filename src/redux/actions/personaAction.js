const NUEVA_PERSONA = "NUEVA_PERSONA";
function persona_action(nombre,apellido,edad){
    return {
        type: NUEVA_PERSONA,
        payload: {nombre:nombre, apellido:apellido, edad:edad}
    }
}