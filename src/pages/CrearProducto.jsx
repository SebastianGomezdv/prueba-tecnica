import { useState } from "react"
import { endpoints } from "../utils/api";
import { generarId } from "../utils/functions";
import { alertaConfirmacion } from "../utils/alertas";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
    const [getNombre, setNombre] = useState("");
    const [getDescripcion, setDescripcion] = useState("");
    const [getPrecio, setPrecio] = useState(0);
    const [getCantidad, setCantidad] = useState(0);
    let redireccion = useNavigate();

    function almacenarProducto() {
        let producto = {
            id: generarId(),
            nombre: getNombre,
            descripción: getDescripcion,
            precio: getPrecio,
            cantidad: getCantidad
        }
        fetch(endpoints.productos, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto),
        }).then((response)=> response.json())
        .then((data) => {
            console.log("Producto Creado", data);
            alertaConfirmacion("Producto Creado con éxito", "success", redireccion, "/home/productos");
        });
    }

return (
    <div><form className="form-producto">
        <p className="form-title">Registrar Producto</p>
        <div className="input-container">
            <input
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                placeholder="Nombre del producto"
            />
        </div>
        <div className="input-container">
            <input
                onChange={(e) => setDescripcion(e.target.value)}
                type="text"
                placeholder="Descripción"
            />
        </div>
        <div className="input-container">
            <input
                onChange={(e) => setPrecio(e.target.value)}
                type="text"
                placeholder="Precio"
            />
        </div>
        <div className="input-container">
            <input
                onChange={(e) => setCantidad(e.target.value)}
                type="text"
                placeholder="Cantidad"
            />
        </div>
        <button onClick={almacenarProducto} type="button" className="submit">
            Registrar
        </button>
    </form></div>
)
}

export default CrearProducto