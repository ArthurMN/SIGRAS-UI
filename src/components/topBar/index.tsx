import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import NotificacaoPopover from "../notificacoesPopover";
import { Home, List } from "lucide-react";
import { useEffect, useState } from "react";
import { logout } from "../../services/auth";

export type UserType = {
  nome: string;
  cargo: string;
  fotoUrl?: string;
};

const notificacoesExemplo = [
  {
    status: true,
    sala: 101,
    codigo: "ABC123",
    data: "21/07/2025 10:30",
  },
  {
    status: false,
    sala: 202,
    codigo: "XYZ789",
    data: "20/07/2025 14:45",
  },
  {
    status: true,
    sala: 305,
    codigo: "JKL456",
    data: "19/07/2025 09:00",
  },
  {
    status: false,
    sala: 404,
    codigo: "DEF321",
    data: "18/07/2025 16:15",
  },
];

const Topbar = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<UserType | null>(null);

  useEffect(() => {
    const nome = localStorage.getItem("@user_name");
    const cargo = localStorage.getItem("@user_role");
    const fotoUrl = localStorage.getItem("@user_foto"); // caso venha a usar futuramente

    if (nome && cargo) {
      setUsuario({ nome, cargo, fotoUrl: fotoUrl || undefined });
    }
  }, []);

  const handleLogout = async () => {
    localStorage.clear();
    await logout();
    navigate("/login");
  };

  return (
    <header className="w-full bg-white border-b border-b-gray-200 shadow flex justify-center">
      <div className="w-full max-w-6xl px-4 py-3 flex justify-between items-center">
        {usuario ? (
          <>
            <div className="flex items-center gap-3">
              {usuario.fotoUrl ? (
                <img
                  src={usuario.fotoUrl}
                  alt="Foto do usuário"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="w-10 h-10 text-gray-400" />
              )}
              <div className="flex flex-col leading-tight">
                <span className="text-sm text-gray-700 font-semibold capitalize">
                  Olá, {usuario.nome}
                </span>
                <span className="text-xs text-gray-500 capitalize">
                  {usuario.cargo}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center border border-gray-300 rounded-lg p-2 hover:bg-gray-100 hover: transition"
              >
                <Home className="w-4 h-4 text-gray-600" />
              </Link>
              <NotificacaoPopover notificacoes={notificacoesExemplo} />
              <Link
                to="/minhas-reservas"
                className="flex items-center border border-gray-300 rounded-lg px-3 py-2 gap-2 text-xs text-gray-950 hover:bg-gray-100 hover: transition"
              >
                <BsFillCalendarCheckFill className="w-4 h-4 text-gray-600" />
                Minhas reservas
              </Link>
              {usuario.cargo === "coordenador" && (
                <Link
                  to="/solicitacoes"
                  className="flex items-center border border-gray-300 rounded-lg px-3 py-2 gap-2 text-xs text-gray-950 hover:bg-gray-100 hover: transition hover:cursor-pointer"
                >
                  <List className="w-4 h-4 text-gray-600" />
                  Solicitações
                </Link>
              )}
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center border border-gray-300 rounded-lg px-3 py-2 gap-2 text-xs text-gray-950 hover:bg-gray-100 hover:text-red-500 hover:cursor-pointer transition"
              >
                <FiLogOut className="w-4 h-4" />
                Sair
              </button>
            </div>
          </>
        ) : (
          <div className="w-full flex justify-end">
            <Link
              to="/login"
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
            >
              Fazer Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
