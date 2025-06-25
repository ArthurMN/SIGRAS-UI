import classNames from "../../utils/classNames";
import type { FormEventHandler, JSX } from "react";
import Field from "./Field";
import InputText from "./InputText";

type propsFormulario = {
  className?: string;
  children?: Array<JSX.Element> | JSX.Element;
  align?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

const Formulario = ({
  className,
  children,
  align = "end",
  onSubmit,
}: propsFormulario): JSX.Element => {
  return (
    <form
      autoComplete="off"
      className={classNames(
        "grid grid-cols-1 gap-4",
        align === "end" ? "items-end" : "items-start",
        className
      )}
      onSubmit={onSubmit ?? ((e) => e.preventDefault())}
    >
      {children}
    </form>
  );
};

Formulario.Field = Field;
Formulario.InputText = InputText;

export default Formulario
