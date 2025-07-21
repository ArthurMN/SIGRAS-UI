import { CheckCheck, X } from "lucide-react";
import Table from "../../components/table";
import { useState } from "react";
import TablePagination from "../../components/tablePagination";
import ModalJustificativaRecusa from "../../modals/modalJustificativaRecusa";

const solicitacoes = [
  {
    id: 1,
    sala: "Sala 1",
    local: "Bloco engenharias",
    horario: "2025-07-21 14:00",
    solicitante: "Maria Souza",
  },
  {
    id: 2,
    sala: "Sala 2",
    local: "Bloco engenharias",
    horario: "2025-07-21 15:30",
    solicitante: "João Silva",
  },
  {
    id: 3,
    sala: "Sala 3",
    local: "Bloco engenharias",
    horario: "2025-07-21 09:45",
    solicitante: "Carlos Lima",
  },
  {
    id: 4,
    sala: "Sala 4",
    local: "Bloco engenharias",
    horario: "2025-07-21 10:00",
    solicitante: "Ana Paula",
  },
  {
    id: 5,
    sala: "Sala 5",
    local: "Bloco engenharias",
    horario: "2025-07-21 11:15",
    solicitante: "Bruno Medeiros",
  },
  {
    id: 6,
    sala: "Sala 6",
    local: "Bloco engenharias",
    horario: "2025-07-21 13:00",
    solicitante: "Fernanda Dias",
  },
  {
    id: 7,
    sala: "Sala 7",
    local: "Bloco engenharias",
    horario: "2025-07-21 13:00",
    solicitante: "Fernanda Dias",
  },
  {
    id: 8,
    sala: "Sala 8",
    local: "Bloco engenharias",
    horario: "2025-07-21 13:00",
    solicitante: "Fernanda Dias",
  },
  {
    id: 9,
    sala: "Sala 9",
    local: "Bloco engenharias",
    horario: "2025-07-21 13:00",
    solicitante: "Fernanda Dias",
  },
  {
    id: 10,
    sala: "Sala 10",
    local: "Bloco engenharias",
    horario: "2025-07-21 13:00",
    solicitante: "Fernanda Dias",
  },
];

const registrosPorPagina = 5;

const Solicitacoes = () => {
  const [pagina, setPagina] = useState(0);
  const carregando = false;
  const totalRegistros = solicitacoes.length;
  const totalPaginas = Math.ceil(totalRegistros / registrosPorPagina);
  const inicio = pagina * registrosPorPagina;
  const fim = inicio + registrosPorPagina;
  const registrosVisiveis = solicitacoes.slice(inicio, fim);

  return (
    <div className="w-full max-w-6xl mx-auto pt-12">
      <Table
        titulo={`Solicitações (${solicitacoes.length})`}
        tamanhoTitulo="pequeno"
      >
        <Table.Header>
          <Table.Header.Coluna
            className="text-gray-300"
            alignText="text-center"
          >
            Codigo
          </Table.Header.Coluna>
          <Table.Header.Coluna alignText="text-center">
            Sala
          </Table.Header.Coluna>
          <Table.Header.Coluna alignText="text-center">
            Local da sala
          </Table.Header.Coluna>
          <Table.Header.Coluna alignText="text-center">
            Horário da solicitação
          </Table.Header.Coluna>
          <Table.Header.Coluna alignText="text-center">
            Quem solicitou
          </Table.Header.Coluna>
          <Table.Header.Coluna alignText="text-center">
            Aceitar/Rejeitar
          </Table.Header.Coluna>
        </Table.Header>

        <Table.Body>
          {registrosVisiveis.map((item) => {
            return (
              <Table.Body.Linha key={item.id}>
                <Table.Body.Linha.Coluna
                  className="text-gray-900"
                  alignText="text-center"
                >
                  {item.id}
                </Table.Body.Linha.Coluna>
                <Table.Body.Linha.Coluna
                  className="text-gray-900 font-medium"
                  alignText="text-center"
                >
                  {item.sala}
                </Table.Body.Linha.Coluna>

                <Table.Body.Linha.Coluna alignText="text-center">
                  {item.local}
                </Table.Body.Linha.Coluna>

                <Table.Body.Linha.Coluna alignText="text-center">
                  {item.horario}
                </Table.Body.Linha.Coluna>

                <Table.Body.Linha.Coluna alignText="text-center">
                  {item.solicitante}
                </Table.Body.Linha.Coluna>

                <Table.Body.Linha.Coluna alignText="text-center">
                  <div className="flex justify-center gap-2">
                    <button className="border rounded-lg border-gray-200 p-1 text-green-600 hover:text-white hover:bg-green-600">
                      <CheckCheck size={18} />
                    </button>
                    <ModalJustificativaRecusa
                      onConfirm={(justificativa) => {
                        console.log("Justificativa enviada:", justificativa);
                      }}
                      trigger={
                        <button className="border rounded-lg border-gray-200 p-1 text-red-600 hover:text-white hover:bg-red-600">
                          <X size={18} />
                        </button>
                      }
                    />
                  </div>
                </Table.Body.Linha.Coluna>
              </Table.Body.Linha>
            );
          })}
        </Table.Body>
      </Table>
      <TablePagination
        pagina={pagina}
        totalPaginas={totalPaginas}
        totalRegistros={totalRegistros}
        registrosPorPagina={registrosPorPagina}
        onClickPaginaAnterior={() => setPagina((prev) => prev - 1)}
        onClickPaginaPosterior={() => setPagina((prev) => prev + 1)}
        onClickPagina={(num) => setPagina(num)}
        carregando={carregando}
      />
    </div>
  );
};

export default Solicitacoes;
