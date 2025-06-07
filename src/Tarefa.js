import React from "react";

//Função para alternar o status.
export default function Tarefa({ tarefa, toggleConcluida, className }) {
  return (
    <li className={className}>
      <label className={tarefa.concluida ? "strikethrough" : ""}>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => toggleConcluida(tarefa.id)}
        />
        {tarefa.texto}
      </label>
    </li>
  );
}