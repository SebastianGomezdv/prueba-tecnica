import { useEffect, useState } from "react";
import { endpoints } from "../utils/api";
import { alertaGeneral } from "../utils/alertas";
const Productos = () => {
  const [getProductos, setProductos] = useState([]);
  function consultarProductos() {
    fetch(endpoints.productos)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    consultarProductos();
  }, []);

  function eliminarProducto(id) {
    fetch(`${endpoints.productos}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);        
        alertaGeneral(
          "Producto Eliminado",
          "El producto se ha eliminado de forma correcta",
          "success"
        );
        consultarProductos();
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="cards-productos">
      {getProductos.map((producto) => (
        <article key={producto.id} className="card-producto">
          <h2>Nombre: {producto.nombre}</h2>
          <p>Descripción: {producto.descripción}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <div className="card-buttons">
            <button type="button">Editar</button>
            <button onClick={() => eliminarProducto(producto.id)} type="button">
              Eliminar
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Productos;
