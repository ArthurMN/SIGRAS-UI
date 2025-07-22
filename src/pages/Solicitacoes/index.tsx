import { CheckCheck, X } from "lucide-react";
import Table from "../../components/table";
import { useState } from "react";
import TablePagination from "../../components/tablePagination";
import ModalJustificativaRecusa from "../../modals/modalJustificativaRecusa";
import { toast } from "react-toastify";

const solicitacoes = [
  {
    id: 1,
    sala: "Sala 01",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "10:00 -> 12:00",
    solicitante: "Thiago Iachiley",
  },
  {
    id: 2,
    sala: "Sala 02",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "08:00 -> 10:00",
    solicitante: "Jarbas Joaci",
  },
  {
    id: 3,
    sala: "Sala 03",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "13:30 -> 15:30",
    solicitante: "Fernando Rodrigues",
  },
  {
    id: 4,
    sala: "Sala 04",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "08:00 -> 10:00",
    solicitante: "Jermana Lopes",
  },
  {
    id: 5,
    sala: "Sala 05",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "08:00 -> 10:00",
    solicitante: "Rui Vigeli",
  },
  {
    id: 6,
    sala: "Sala 06",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "15:30 -> 17:30",
    solicitante: "Nilena Brito",
  },
  {
    id: 7,
    sala: "Sala 07",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "15:30 -> 17:30",
    solicitante: "Fernando Rodrigues",
  },
  {
    id: 8,
    sala: "Sala 08",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "15:30 -> 17:30",
    solicitante: "Fernando Rodrigues",
  },
  {
    id: 9,
    sala: "Sala 09",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "15:30 -> 17:30",
    solicitante: "Fernando Rodrigues",
  },
  {
    id: 10,
    sala: "Sala 10",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "15:30 -> 17:30",
    solicitante: "Fernando Rodrigues",
  },
  {
    id: 11,
    sala: "Sala 11",
    local: "Bloco das engenharias",
    data: "21/07/2025",
    horario: "15:30 -> 17:30",
    solicitante: "Fernando Rodrigues",
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
            Data solicitada
          </Table.Header.Coluna>
          <Table.Header.Coluna alignText="text-center">
            Horário solicitado
          </Table.Header.Coluna>
          <Table.Header.Coluna alignText="text-center">
            Requerente
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
                  {item.data}
                </Table.Body.Linha.Coluna>

                <Table.Body.Linha.Coluna alignText="text-center">
                  {item.horario}
                </Table.Body.Linha.Coluna>

                <Table.Body.Linha.Coluna alignText="text-center">
                  {item.solicitante}
                </Table.Body.Linha.Coluna>

                <Table.Body.Linha.Coluna alignText="text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        toast.success("Solicitação aceita!");
                      }}
                      className="border rounded-lg border-gray-200 p-1 text-green-600 hover:text-white hover:bg-green-600"
                    >
                      <CheckCheck size={18} />
                    </button>
                    <ModalJustificativaRecusa
                      onConfirm={(justificativa) => {
                        console.log("Justificativa enviada:", justificativa);
                        toast.success("Solicitação recusada!");
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
