import {
  FaCircle,
  FaMapMarkerAlt,
  FaUsers,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { MdSlideshow } from "react-icons/md";

export type SalaCardProps = {
  numeroSala: string;
  nomeBloco: string;
  capacidade: number;
  disponibilidade: string;
  onClick?: () => void;
  status: "disponível" | "ocupada";
};

const SalaCard = ({
  numeroSala,
  nomeBloco,
  capacidade,
  disponibilidade,
  status,
  onClick,
}: SalaCardProps) => {
  const statusColor =
    status === "disponível" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-md">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-1">
        <FaCircle className={statusColor} />
        <span>Sala {numeroSala}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
        <FaMapMarkerAlt className="text-gray-400" />
        <span>Bloco {nomeBloco}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
        <FaUsers className="text-gray-400" />
        <span>Até {capacidade} alunos</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <MdSlideshow className="text-gray-400" />
        <span>{disponibilidade}</span>
      </div>

      <button
        onClick={() => onClick?.()}
        className="flex w-full items-center justify-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        <FaRegCalendarAlt />
        Agendar
      </button>
    </div>
  );
};

export default SalaCard;
