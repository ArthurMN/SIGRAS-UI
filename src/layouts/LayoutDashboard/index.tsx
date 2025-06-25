import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";

const LayoutDashboard = () => {
  const location = useLocation();
  let navigate = useNavigate();

  const TokenVerify = async () => {
    const token = localStorage.getItem("@admin_token");

    const isLoginPage = location.pathname === "/login";

    if (!token && !isLoginPage) {
      navigate(`/login?url=${location.pathname}`, { replace: true });
    }
  };

  const loadItensDebounce = useDebounce(() => {
    TokenVerify();
  }, 500);

  useEffect(() => {
    loadItensDebounce();
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4 bg-primary">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutDashboard;
