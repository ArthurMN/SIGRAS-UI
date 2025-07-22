import SalaReservaCard, { type SalaReservaCardProps } from "../../templates/SalaReservaCard";

const salas: SalaReservaCardProps[] = [
  {
    numeroSala: "02",
    nomeBloco: "Bloco das engenharias",
    capacidade: 50,
    data: "21/07/2025",
    status: true,
    horario: "13:30 -> 15:30"
  },
  {
    numeroSala: "03",
    nomeBloco: "Bloco das engenharias",
    capacidade: 40,
    data: "22/07/2025",
    status: false,
    horario: "15:30 -> 17:30"
  },
];

const MinhasReservas = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-20 px-4">
      <div className="flex justify-start gap-x-6 border-b border-gray-200">
        <div
          className={`pb-2 transition-all duration-200 font-semibold text-gray-950 text-lg`}
        >
          Minhas Reservas ({salas.length})
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {salas.map((sala, index) => (
          <SalaReservaCard key={index} {...sala} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default MinhasReservas;
