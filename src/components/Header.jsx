/* 
rfce -> Crea un componente funcional regular
rafce -> Crea un componente funcional flecha
*/
import "./Header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  let navigate = useNavigate();
  function cerrarSesion() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <header className="header">
      <h2 className="header-usuario">{usuarioLogueado.name}</h2>
      <nav className="header-nav">
        <a className="header-nav-item" href="">
          Home
        </a>
        <a className="header-nav-item" href="">
          Por definir
        </a>
        <button
          onClick={cerrarSesion}
          className="header-nav-item"
          type="button"
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;
