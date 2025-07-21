import LayoutDashboard from "../layouts/LayoutDashboard";
import Home from "../pages/Home";
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
  ],
};

export default pageRoutes;
