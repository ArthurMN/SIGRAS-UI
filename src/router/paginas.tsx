import LayoutDashboard from "../layouts/LayoutDashboard";
import Home from "../pages/Home";

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
  ],
};

export default pageRoutes;
