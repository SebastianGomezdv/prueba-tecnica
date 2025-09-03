import ErrorNotFound from "../pages/ErrorNotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtegerRutas from "../components/ProtegerRutas";
export let routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <ProtegerRutas proteger={<Home />} />,
  },
  {
    path: "*",
    element: <ErrorNotFound />,
  },
];
