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
  horariosDisponiveis: string[];
  onClick?: () => void;
  status: "disponível" | "ocupada";
  usuarioLogado?: boolean;
};

const SalaCard = ({
  numeroSala,
  nomeBloco,
  capacidade,
  horariosDisponiveis,
  status,
  onClick,
  usuarioLogado = false,
}: SalaCardProps) => {
  const statusColor =
    status === "disponível" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-md flex flex-col justify-between h-full">
      <div className="">
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
          <div className="flex flex-col gap-1">
            {horariosDisponiveis.length > 0 ? (
              horariosDisponiveis.map((horario, index) => (
                <span key={index}>{horario}</span>
              ))
            ) : (
              <span className="italic text-gray-400">
                Sem horários disponíveis
              </span>
            )}
          </div>
        </div>
      </div>

      {usuarioLogado && (
        <button
          onClick={() => onClick?.()}
          className="flex hover:cursor-pointer align-bottom w-full items-center justify-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FaRegCalendarAlt />
          Agendar
        </button>
      )}
    </div>
  );
};

export default SalaCard;
