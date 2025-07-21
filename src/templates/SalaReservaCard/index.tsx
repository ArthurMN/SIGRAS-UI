import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { MdSlideshow } from "react-icons/md";
import classNames from "../../utils/classNames";

export type SalaReservaCardProps = {
  numeroSala: string;
  nomeBloco: string;
  capacidade: number;
  disponibilidade: string;
  horario: string;
  onClick?: () => void;
  status: boolean;
};

const SalaReservaCard = ({
  numeroSala,
  nomeBloco,
  capacidade,
  disponibilidade,
  horario,
  status,
  onClick,
}: SalaReservaCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-md">
      <div className="flex items-center justify-between text-sm font-medium text-gray-800 mb-1">
        <span className="text-gray-900 font-semibold">Sala {numeroSala}</span>
        <span>{horario}</span>
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
        className={classNames(
          `flex w-full items-center justify-center gap-2 text-white text-sm 
          font-medium px-4 py-2 rounded-lg transition`,
          status ? "bg-green-500" : "bg-red-500"
        )}
      >
        {status ? "Solicitação aceita" : "Solicitação recusada"}
      </button>
    </div>
  );
};

export default SalaReservaCard;
