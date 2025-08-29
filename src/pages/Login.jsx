import "./Login.css";
import { alertaGeneral } from "../utils/alertas";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
let URI = "http://localhost:3100/usuarios";

const Login = () => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getUsuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();

  function listarUsuarios() {
    fetch(URI)
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    listarUsuarios();
  }, []);

  function buscarUsuario() {
    let auth = getUsuarios.find(
      (item) => getPassword == item.password && getEmail == item.email
    );
    console.log(auth);
    return auth;
  }

  function iniciarSesion() {
    if (buscarUsuario()) {
      alertaGeneral("Bienvenido", "Será redireccionado", "success");
      redireccion("/home");
    } else {
      alertaGeneral("Error", "Credenciales incorrectas", "error");
    }
  }

  return (
    <form class="form">
      <p class="form-title">Sign in to your account</p>
      <div class="input-container">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <span></span>
      </div>
      <div class="input-container">
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
      </div>
      <button onClick={iniciarSesion} type="button" class="submit">
        Sign in
      </button>
      <p class="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
    </form>
  );
};

export default Login;
