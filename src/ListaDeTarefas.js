import React from "react";
import Tarefa from "./Tarefa";
import "./ListaDeTarefas.css";

//Se a lista estiver vazia, exibe uma mensagem
export default function ListaDeTarefas({ tarefas, toggleConcluida }) {
  if (tarefas.length === 0) {
    return (
      <p style={{ marginTop: 20, textAlign: "center", color: "#666" }}>
        Nenhuma tarefa para mostrar.
      </p>
    );
  }

  //Caso contrário, mapeia o array para renderizar um componente Tarefa para cada item.
  return (
    <ul>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          toggleConcluida={toggleConcluida}
          className="fade-in"
        />
      ))}
    </ul>
  );
}
