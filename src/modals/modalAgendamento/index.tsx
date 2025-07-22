import * as Dialog from "@radix-ui/react-dialog";
import type { SalaCardProps } from "../../templates/SalaCard";
import { X } from "lucide-react";

interface ModalAgendamentoProps {
  sala: SalaCardProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ModalAgendamento = ({
  sala,
  open,
  onOpenChange,
}: ModalAgendamentoProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0 z-40" />

        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white shadow-lg">
          <div className="px-5 pt-5 pb-3 border-b-1 border-gray-200">
            <div className="flex items-center justify-between ">
              <Dialog.Title className="text-lg font-semibold">
                Agendar Sala
              </Dialog.Title>
              <Dialog.Close className="" asChild>
                <button>
                  <div className="text-gray-500 items-center justify-center rounded-lg border border-gray-300 p-1 hover:text-gray-800 hover:border-gray-800">
                    <X size={20} />
                  </div>
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="space-y-4 px-5 pt-6 pb-3">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Sala selecionada
              </label>
              <div className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-600">
                <p>{`${sala.numeroSala} - ${sala.nomeBloco}`}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Para quem é?
              </label>
              <input
                type="text"
                placeholder="Digite o nome"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Selecione um horário
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option value="">Escolha um horário</option>
                <option value="08:00">08:00 - 10:00</option>
                <option value="10:00">10:00 - 12:00</option>
                <option value="14:00">14:00 - 16:00</option>
                <option value="16:00">16:00 - 18:00</option>
                <option value="18:00">18:00 - 20:00</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pr-6 pb-3 pt-6">
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition">
              Agendar Sala
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalAgendamento;
