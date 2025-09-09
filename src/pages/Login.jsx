import "./Login.css";
import { alertaGeneral } from "../utils/alertas";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generarId, generarToken } from "../utils/functions";
import { endpoints } from "../utils/api";

const Login = () => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getUsuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();


  console.log(endpoints.usuarios);
  
  function listarUsuarios() {
    fetch(endpoints.usuarios)
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data)
        console.log(data);        
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    listarUsuarios();
  }, []);

  function buscarUsuario() {
    let auth = getUsuarios.find(
      (item) => getPassword == item.contraseña && getEmail == item.correo
    );
    console.log(auth);
    return auth;
  }

  function iniciarSesion() {
    if (buscarUsuario()) {
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      localStorage.setItem("token", generarToken());
      alertaGeneral("Bienvenido", "Será redireccionado", "success");
      redireccion("/home");
    } else {
      alertaGeneral("Error", "Credenciales incorrectas", "error");
    }
  }

  return (
    <form className="form">
      <p className="form-title">Sign in to your account</p>
      <div className="input-container">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <span></span>
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter password"
        />
      </div>
      <button onClick={iniciarSesion} type="button" className="submit">
        Sign in
      </button>
      <p className="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
    </form>
  );
};

export default Login;
