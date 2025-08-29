import ErrorNotFound from "../pages/ErrorNotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
export let routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorNotFound />,
  },
];
