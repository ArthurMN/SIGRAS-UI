// components/ModalJustificativaRecusa.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";

interface ModalJustificativaRecusaProps {
  onConfirm: (justificativa: string) => void;
  trigger: React.ReactNode;
}

const ModalJustificativaRecusa = ({
  onConfirm,
  trigger,
}: ModalJustificativaRecusaProps) => {
  const [open, setOpen] = useState(false);
  const [justificativa, setJustificativa] = useState("");

  const handleConfirm = () => {
    onConfirm(justificativa);
    setOpen(false);
    setJustificativa("");
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 fixed inset-0 z-40" />
        <Dialog.Content className="fixed z-50 bg-white rounded-xl shadow-xl w-[90vw] max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center px-6 py-4 border-b border-b-gray-200 justify-between mb-4">
            <Dialog.Title className="text-lg font-semibold">
              Justificativa Recusa
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="border rounded-lg border-gray-200 p-1 text-gray-800 hover:cursor-pointer">
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>

          <div className="px-6">
            <p className="text-sm font-medium mb-2">
              Explique o motivo de você ter recusado essa solicitação:
            </p>

            <textarea
              value={justificativa}
              onChange={(e) => setJustificativa(e.target.value)}
              placeholder="Horário conflitante..."
              className="w-full h-28 border border-gray-200 rounded-lg p-2 resize-none text-sm"
            />
          </div>

          <div className="flex justify-end pt-9 pb-3 px-6">
            <button
              onClick={handleConfirm}
              className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 hover:cursor-pointer text-sm"
            >
              Recusar solicitação
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalJustificativaRecusa;
