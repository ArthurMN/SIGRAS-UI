import brasao from "../../assets/brasao3_horizontal_branco.svg";
import SearchBar from "../../components/searchBar";
import { useState } from "react";
import SalaCard, { type SalaCardProps } from "../../templates/SalaCard";
import ModalAgendamento from "../../modals/modalAgendamento";

const salas: SalaCardProps[] = [
  {
    numeroSala: "01",
    nomeBloco: "Bloco das engenharias",
    capacidade: 50,
    disponibilidade: "Disponível à tarde",
    status: "disponível",
  },
  {
    numeroSala: "02",
    nomeBloco: "Bloco das engenharias",
    capacidade: 50,
    disponibilidade: "Ocupada até 16h",
    status: "ocupada",
  },
  {
    numeroSala: "03",
    nomeBloco: "Bloco das engenharias",
    capacidade: 50,
    disponibilidade: "Disponível manhã",
    status: "disponível",
  },
  {
    numeroSala: "04",
    nomeBloco: "Bloco das engenharias",
    capacidade: 50,
    disponibilidade: "Ocupada o dia todo",
    status: "ocupada",
  },
  {
    numeroSala: "05",
    nomeBloco: "Bloco das engenharias",
    capacidade: 50,
    disponibilidade: "Disponível agora",
    status: "disponível",
  },
  {
    numeroSala: "06",
    nomeBloco: "Bloco das engenharias",
    capacidade: 50,
    disponibilidade: "Disponível à noite",
    status: "disponível",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState<
    "todas" | "disponiveis" | "ocupadas"
  >("todas");

  const [selectedSala, setSelectedSala] = useState<SalaCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const salasFiltradas = salas.filter((sala) => {
    if (activeTab === "disponiveis") return sala.status === "disponível";
    if (activeTab === "ocupadas") return sala.status === "ocupada";
    return true;
  });

  const salasDisponiveis = salas.filter((sala) => {
    return sala.status === "disponível";
  });

  const salasOcupadas = salas.filter((sala) => {
    return sala.status === "ocupada";
  });

  const handleAgendar = (sala: SalaCardProps) => {
    setSelectedSala(sala);
    console.log("Click");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSala(null);
  };

  return (
    <div className="pb-28">
      <div className="relative flex py-24 w-full h-28 items-center justify-center bg-primary">
        <img
          src={brasao}
          alt="Brasão da UFC"
          className="w-28 sm:w-32 md:w-36 lg:w-56 mb-6"
        />

        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-full px-4 sm:px-0">
          <SearchBar />
        </div>

        <div className="h-16" />
      </div>

      <div className="w-full max-w-6xl mx-auto mt-20 px-4">
        <div className="flex justify-start gap-x-6 border-b border-gray-200">
          {[
            { id: "todas", label: "Todas", count: salas.length },
            {
              id: "disponiveis",
              label: "Disponíveis",
              count: salasDisponiveis.length,
            },
            { id: "ocupadas", label: "Ocupadas", count: salasOcupadas.length },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`pb-2 border-b-4 transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-primary text-gray-950 font-medium text-sm"
                  : "border-transparent text-gray-500 hover:text-gray-700 text-sm"
              }`}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {salasFiltradas.map((sala, index) => (
            <SalaCard
              key={index}
              {...sala}
              onClick={() => handleAgendar(sala)}
            />
          ))}
        </div>
      </div>

      {selectedSala && (
        <ModalAgendamento
          sala={selectedSala}
          open={isModalOpen}
          onOpenChange={(open) => {
            setIsModalOpen(open);
            if (!open) setSelectedSala(null);
          }}
        />
      )}
    </div>
  );
};

export default Home;
