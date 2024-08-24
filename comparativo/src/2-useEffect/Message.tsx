import { useEffect, useState } from "react";

export default function Message() {
    const [coords, setCoords] = useState({x:0, y: 0})
    useEffect(() => {
        const onMousemove = ({ x, y }: any) => {
            setCoords({ x, y });
            console.log(coords);
        }
        window.addEventListener('mousemove', onMousemove);
        //El return es para que no se presenten fugas de memoria y mate el proceso
        // Si no se pone el retur seguiria imprimiendo en consola las coordenadas 
        // al agregarlo cuando ya no se cumple la condición "username==='pep'" no sigue imprimiendo nada en el console
        return () => {
            window.removeEventListener('mousemove', onMousemove);
        }
    }, []);
    return (
        <>
            Mensaje de prueba {JSON.stringify(coords)}
        </>
    )
}
