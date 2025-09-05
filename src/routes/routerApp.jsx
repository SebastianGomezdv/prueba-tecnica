import ErrorNotFound from "../pages/ErrorNotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtegerRutas from "../components/ProtegerRutas";
import Productos from "../pages/Productos";
import Clientes from "../pages/Clientes";
export let routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home/",
    element: <ProtegerRutas proteger={<Home />} />,
    children: [
      {
        path: "productos",
        element: <Productos />,
      },
      {
        path: "clientes",
        element: <Clientes />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorNotFound />,
  },
];
