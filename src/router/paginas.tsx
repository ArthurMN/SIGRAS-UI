import LayoutDashboard from "../layouts/LayoutDashboard";
import Home from "../pages/Home";
import MinhasReservas from "../pages/MinhasReservas";
import Solicitacoes from "../pages/Solicitacoes";

const pageRoutes = {
  path: "/",
  element: <LayoutDashboard />,
  // errorElement: <NotFound />,
  children: [
    {
      path: "/",
      element: <Home />,
      children: [],
    },
    {
      path: "/solicitacoes",
      element: <Solicitacoes />,
      children: [],
    },
    {
      path: "/minhas-reservas",
      element: <MinhasReservas />,
      children: [],
    },
  ],
};

export default pageRoutes;
