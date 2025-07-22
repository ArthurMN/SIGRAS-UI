import * as Popover from "@radix-ui/react-popover";
import { FaCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";

type Notificacao = {
  status: boolean;
  sala: number;
  codigo: string;
  data: string;
};

type NotificacaoPopoverProps = {
  notificacoes: Notificacao[];
};

const NotificacaoPopover = ({ notificacoes }: NotificacaoPopoverProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:cursor-pointer transition"
          title="Notificações"
        >
          <FiBell className="w-4 h-4 text-gray-600" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          align="end"
          sideOffset={8}
          className="w-80 space-y-4 bg-white border border-gray-200 shadow-lg rounded-xl py-4 z-50"
        >
          <div className="pb-4 px-6 border-b-1 border-b-gray-200">
            <h2 className="text-sm font-semibold text-gray-800">
              Notificações
            </h2>
          </div>

          <div className="max-h-64 overflow-y-auto space-y-3">
            {notificacoes.length === 0 ? (
              <span className="text-xs text-gray-500">Sem notificações.</span>
            ) : (
              notificacoes.map((n, index) => (
                <div
                  key={index}
                  className="border-b-1 border-b-gray-200 px-4 pb-4"
                >
                  <div className="flex flex-row gap-1 items-center pb-2">
                    <FaCircle
                      className={n.status ? "text-green-500" : "text-red-500"}
                      size={12}
                    />
                    <p className="text-sm font-semibold text-gray-800">
                      {n.status ? "Reserva feita!" : "Reserva recusada!"}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 pb-3">
                    Sua reserva na sala{" "}
                    <span className="font-semibold">{n.sala}</span> de codigo{" "}
                    <span className="font-semibold">{n.codigo}</span>.
                  </p>
                  <p className="text-xs text-gray-400">{n.data}</p>
                </div>
              ))
            )}
          </div>

          {/* <div className="px-4">
            <button
              className="text-xs text-white px-4 py-2 bg-primary rounded-lg hover:underline transition"
              onClick={() => {
                console.log("Ver todas as notificações");
              }}
            >
              Ver todas
            </button>
          </div> */}

          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default NotificacaoPopover;
