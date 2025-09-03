import { Navigate } from "react-router-dom";

const ProtegerRutas = ({ proteger }) => {
  let token = localStorage.getItem("token");
  return token ? proteger : <Navigate to={"/"} />;
};

export default ProtegerRutas;
