import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import pageRoutes from "./paginas";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      errorElement: <div></div>,
    },
    pageRoutes
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
