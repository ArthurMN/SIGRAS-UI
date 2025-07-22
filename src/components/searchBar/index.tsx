import Select from "react-select";
import { BiSearch } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { registerLocale } from 'react-datepicker';
import {ptBR}from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

registerLocale('pt-BR', ptBR);


const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    padding: 0,
    minHeight: "unset",
    backgroundColor: "transparent",
  }),
  dropdownIndicator: () => ({
    display: "none", // remove ícone seta
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#374151", // cinza escuro (gray-700)
    fontSize: "0.875rem", // text-sm
    fontWeight: 500,
    marginTop: "-0.25rem", // sobe um pouco
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontSize: "0.875rem",
    color: "#374151",
    fontWeight: 500,
    marginTop: "-0.25rem",
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  input: (provided: any) => ({
    ...provided,
    margin: 0,
    padding: 0,
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
};

const optionsTipoSala = [
  { value: "auditorio", label: "Auditório" },
  { value: "lab_informatica", label: "Laboratório de Informática" },
  { value: "sala_reuniao", label: "Sala de Reunião" },
];

const optionsHorario = [
  { value: "08:00 - 10:00", label: "08:00 - 10:00)" },
  { value: "10:00 - 12:00", label: "10:00 - 12:00" },
  { value: "12:00 - 13:30", label: "12:00 - 13:30" },
  { value: "12:00 - 13:30", label: "13:30 - 15:30" },
  { value: "12:00 - 13:30", label: "15:30 - 17:30" },
  { value: "12:00 - 13:30", label: "18:00 - 20:00" },
];

const optionsAlunos = [
  { value: "10", label: "Até 10 alunos" },
  { value: "20", label: "Até 20 alunos" },
  { value: "30", label: "Até 30 alunos" },
  { value: "30mais", label: "Mais de 30 alunos" },
];

const SearchBar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden flex flex-wrap sm:flex-nowrap items-end gap-4 py-2 px-4">
      {/* Filtro: Tipo de sala */}
      <div className="flex flex-col flex-1 min-w-[150px]">
        <span className="text-xs text-gray-400">Do que você precisa?</span>
        <Select
          options={optionsTipoSala}
          placeholder="Tipos de sala"
          styles={customStyles}
          menuPortalTarget={document.body}
          menuPosition="absolute"
        />
      </div>

      {/* Select 2 */}
      <div className="flex flex-col flex-1 min-w-[150px]">
        <span className="text-xs text-gray-400">Para quando?</span>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Insira as datas"
          dateFormat="dd/MM/yyyy"
          locale="pt-BR"
          className="w-full outline-none placeholder-gray-800"
        />
      </div>

      {/* Select 3 */}
      <div className="flex flex-col flex-1 min-w-[150px]">
        <span className="text-xs text-gray-400">Em qual horário?</span>
        <Select
          options={optionsHorario}
          placeholder="Insira um horário"
          styles={customStyles}
          menuPortalTarget={document.body}
          menuPosition="absolute"
        />
      </div>

      {/* Select 4 */}
      <div className="flex flex-col flex-1 min-w-[150px]">
        <span className="text-xs text-gray-400">Para quantos alunos?</span>
        <Select
          options={optionsAlunos}
          placeholder="Insira um número"
          styles={customStyles}
          menuPortalTarget={document.body}
          menuPosition="absolute"
        />
      </div>

      {/* Botão de busca */}
      <button className="bg-primary hover:bg-blue-700 text-white p-3 rounded-lg flex items-center justify-center">
        <BiSearch className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SearchBar;
