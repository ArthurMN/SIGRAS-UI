import type { JSX } from "react";
import classNames from "../../../utils/classNames";

export type propsField = {
  children?: Array<JSX.Element> | JSX.Element;
  name: string;
  label?: string | JSX.Element;
  hideLabel?: boolean;
  subTitulo?: string;
  opcional?: boolean;
  className?: string;
  icone?: JSX.Element | null;
  mostrarLabel?: boolean;
  classNameIconeContainer?: string;
};

const Field = ({ children, ...props }: propsField): JSX.Element => {
  return (
    <div className={props.className}>
      {!props.hideLabel && (
        <label
          htmlFor={props.name}
          className="flex flex-row items-center gap-1 p-1 text-sm font-bold text-gray-700"
        >
          <p>
            {props.label}
            {props.subTitulo && (
              <i className="text-xs text-gray-400 ml-4">{props.subTitulo}</i>
            )}
          </p>
          {!props.opcional && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex flex-row items-center">
        {props.icone && (
          <div
            className={classNames(
              "ring-1 ring-gray-300 rounded-l-md p-3 sm:text-sm",
              props.classNameIconeContainer
            )}
          >
            {props.icone}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Field;
