import styles from "./Persona.module.css"
export default function Persona({nombre,apellido,edad}){
    return (
        <div key={`${nombre}_${apellido}`} className={styles.persona}>
            <div>Nombre: {nombre}</div>
            <div>Apellido: {apellido}</div>
            <div>Edad: {edad}</div>
        </div>
    );
}
