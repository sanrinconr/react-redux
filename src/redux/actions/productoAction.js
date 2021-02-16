const NUEVO_PRODUCTO = "NUEVO_PRODUCTO"
function nuevo_producto_action(id, nombre, origen, precio){
    return{
        type: NUEVO_PRODUCTO,
        payload: {id:id,nombre:nombre, origen:origen, precio:precio}
    }
}