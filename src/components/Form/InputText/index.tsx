import type {
  Control,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type { typeSelectOptions } from "../../../types/select.d";
import Field, { type propsField } from "../Field";
import classNames from "../../../utils/classNames";
import type { JSX } from "react";
import copyToClipboard from "../../../utils/copyToClipboard";
import { HiOutlineClipboardCopy } from "react-icons/hi";

type propsInput = {
  control?: Control<any>;
  register?: UseFormRegister<any>;
  value?: string | number | boolean | null;
  disabled?: boolean;
  onChange?: Function;
  onInputChange?: Function;
  onSubmit?: Function;
  options?: Array<typeSelectOptions> | null;
  labelOpcaoPadrao?: string;
  placeholder?: string;
  defaultValue?: null | string | typeSelectOptions;
  defaultValueMultiSelect?: null | Array<typeSelectOptions>;
  checked?: boolean;
  defaultChecked?: boolean;
  rows?: number;
  align?: string;
  type?: string;
  min?: number | Date | string | null;
  max?: number | Date | string | null;
  maxLength?: number | null;
  step?: number;
  tamanhoMascara?: number;
  temBotao?: boolean;
  isClearable?: boolean;
  isLoading?: boolean;
  decimalPlaces?: number;
  setValue?: UseFormSetValue<any>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  copyClipboard?: boolean;
  lowercase?: boolean;
  semOpcaoNula?: boolean;
  isFiltro?: boolean;
  dataVazia?: boolean;
  minimoFuncionalidades?: boolean;
};

const InputText = (props: propsField & propsInput): JSX.Element => {
  const {
    register,
    value,
    disabled,
    type,
    min,
    max,
    step,
    maxLength,
    placeholder,
    onKeyDown,
    align,
    copyClipboard,
    lowercase,
    isFiltro,
    name,
    icone,
  } = props;

  function handleClickCopyClipboard(event: React.MouseEvent) {
    event.preventDefault();
    copyToClipboard((value as string) || "");
  }

  return (
    <Field {...props}>
      <>
        <input
          id={isFiltro ? `filtro_${name}` : name}
          disabled={disabled}
          name={name}
          type={type}
          min={min != null && typeof min != "object" ? min : ""}
          max={max != null && typeof max != "object" ? max : ""}
          step={step}
          maxLength={maxLength || undefined}
          placeholder={placeholder}
          onKeyDown={onKeyDown && onKeyDown}
          className={classNames(
            icone || copyClipboard
              ? copyClipboard
                ? "rounded-l-md border-r-0"
                : "rounded-r-md"
              : "rounded-md",
            `w-full border border-gray-300 shadow-sm py-2 px-3 disabled:bg-gray-100 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-transparent`,
            !!align ? align : "text-left"
          )}
          value={value && value !== true ? value : undefined}
          {...(register && register(name))}
          onChange={(e) => {
            if (type != "number") {
              const positionCursor = e.target.selectionStart;

              if (!lowercase)
                e.target.value = e.target.value.toString().toUpperCase();

              if (
                type == "number" &&
                min != null &&
                typeof min != "object" &&
                Number(e.target.value) < (min as number)
              )
                e.target.value = (Number(e.target.value) * -1).toString();

              register && register(name).onChange(e);
              e.target.selectionStart = positionCursor;
              e.target.selectionEnd = positionCursor;
            }
          }}
        />
        {copyClipboard ? (
          <button
            type="button"
            onClick={handleClickCopyClipboard}
            className={`rounded-r-md cursor-pointer border border-l-0 border-gray-300 shadow-sm py-2 px-3 ${
              disabled && "bg-gray-100"
            }`}
          >
            <HiOutlineClipboardCopy className="w-5 h-5" />
          </button>
        ) : (
          <></>
        )}
      </>
    </Field>
  );
};

export default InputText;
