import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import Topbar, { type UserType } from "../../components/topBar";

const LayoutDashboard = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const estaNaRotaLogin = location.pathname === "/login";
  const usuario: UserType = {
    nome: "Thiago",
    cargo: "Docente",
    fotoUrl: "",
  };

  // const TokenVerify = async () => {
  //   const token = localStorage.getItem("@admin_token");

  //   const isLoginPage = location.pathname === "/login";

  //   if (!token && !isLoginPage) {
  //     navigate(`/login?url=${location.pathname}`, { replace: true });
  //   }
  // };

  const loadItensDebounce = useDebounce(() => {
    // TokenVerify();
  }, 500);

  useEffect(() => {
    loadItensDebounce();
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      {!estaNaRotaLogin && <Topbar usuario={usuario || undefined} />}
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutDashboard;
