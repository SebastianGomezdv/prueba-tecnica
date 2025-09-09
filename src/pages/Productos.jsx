import { useEffect, useState } from "react";
import { endpoints } from "../utils/api";
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

  return (
    <div className="cards-productos">
      {getProductos.map((producto) => (
        <article key={producto.id} className="card-producto">
          <h2>Nombre: {producto.nombre}</h2>
          <p>Descripción: {producto.descripción}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Cantidad: {producto.cantidad}</p>
        </article>
      ))}
    </div>
  );
};

export default Productos;
