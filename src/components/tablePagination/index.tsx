import type { JSX } from "react";
import { RxChevronRight, RxChevronLeft } from "react-icons/rx";

type Props = {
  pagina: number;
  totalPaginas: number;
  totalRegistros: number;
  registrosPorPagina: number;
  onClickPaginaAnterior: () => void;
  onClickPaginaPosterior: () => void;
  onClickPagina: (pagina: number) => void;
  className?: string;
  carregando: boolean;
};

const TablePagination = ({
  pagina,
  totalPaginas,
  totalRegistros,
  registrosPorPagina,
  onClickPaginaAnterior,
  onClickPaginaPosterior,
  onClickPagina,
  className,
  carregando,
}: Props): JSX.Element => {
  const registroInicialAtual = pagina * registrosPorPagina + 1;
  const registroFinalAtual =
    (pagina + 1) * registrosPorPagina > totalRegistros
      ? totalRegistros
      : (pagina + 1) * registrosPorPagina;

  const renderBotaoPagina = (
    paginaDestino: number,
    label: string | number,
    extraClasses = ""
  ) => (
    <button
      onClick={() => onClickPagina(paginaDestino)}
      disabled={carregando}
      className={`bg-white disabled:cursor-wait disabled:bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${extraClasses}`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`bg-white select-none -mx-4 px-4 pt-4 flex items-center border-t border-gray-200 justify-between rounded-b-lg ${className}`}
    >
      {/* Mobile */}
      <div className="flex-1 flex justify-between sm:hidden">
        {pagina > 0 && (
          <button
            onClick={onClickPaginaAnterior}
            disabled={carregando}
            className="relative disabled:cursor-wait disabled:bg-gray-100 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Anterior
          </button>
        )}
        {pagina + 1 < totalPaginas && (
          <button
            onClick={onClickPaginaPosterior}
            disabled={carregando}
            className="relative disabled:cursor-wait disabled:bg-gray-100 inline-flex items-center ml-auto px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Próximo
          </button>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando{" "}
            <span className="font-medium">
              {registroFinalAtual ? registroInicialAtual : 0}
            </span>{" "}
            até <span className="font-medium">{registroFinalAtual}</span> de{" "}
            <span className="font-medium">{totalRegistros}</span> resultados
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {pagina > 0 && (
              <button
                onClick={onClickPaginaAnterior}
                disabled={carregando}
                className="relative disabled:cursor-wait disabled:bg-gray-100 inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                aria-label="Anterior"
              >
                <RxChevronLeft className="h-5 w-5" />
              </button>
            )}

            {pagina > 1 && renderBotaoPagina(0, "1")}
            {pagina > 2 && (
              <span className="relative inline-flex rounded-md items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
            )}

            {pagina > 0 && renderBotaoPagina(pagina - 1, pagina)}
            <span className="z-10 bg-blue-50 rounded-md border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              {pagina + 1}
            </span>
            {pagina + 1 < totalPaginas &&
              renderBotaoPagina(pagina + 1, pagina + 2)}

            {pagina + 3 < totalPaginas && (
              <span className="relative inline-flex rounded-md items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
            )}
            {pagina + 2 < totalPaginas &&
              renderBotaoPagina(totalPaginas - 1, totalPaginas)}

            {pagina + 1 < totalPaginas && (
              <button
                onClick={onClickPaginaPosterior}
                disabled={carregando}
                className="relative inline-flex disabled:cursor-wait disabled:bg-gray-100 items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                aria-label="Próximo"
              >
                <RxChevronRight className="h-5 w-5" />
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
