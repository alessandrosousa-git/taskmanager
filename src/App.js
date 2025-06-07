import React, { useState } from "react";
import ListaDeTarefas from "./ListaDeTarefas";
import "./App.css";

//Estados para armazenar
function App() {
  const [tarefas, setTarefas] = useState([]); //Estado de Tarefas
  const [filtro, setFiltro] = useState("Todas"); //Estado de filtros (Todas, Concluídas, Pendentes)
  const [texto, setTexto] = useState(""); //Estado para nova tarefa

  //Função para adicionar uma novas tarefas
  const adicionarTarefa = () => {
    if (!texto.trim()) return; //Ignora se estiver vazio
    setTarefas([...tarefas, { id: Date.now(), texto, concluida: false }]); //Cria tarefas
    setTexto(""); //limpa o input
  };

  //Função para alternar o status de concluída
  const toggleConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  //Filtra as tarefas selecionando
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "Concluídas") return tarefa.concluida;
    if (filtro === "Pendentes") return !tarefa.concluida;

    return true; //Retorna todas as tarefas (Todas)
  });

  //Mostradores na tela
  return (
    <div className="container">
      <h1 className="titulo-destaque">Gerenciador de Tarefas</h1>

      <input //Input para digitar a nova tarefa
        type="text"
        value={texto} //Valor controlado pelo estado texto
        onChange={(e) => setTexto(e.target.value)} //Atualiza o estado ao digitar
        placeholder="Digite sua tarefa"
        style={{ width: "73%", padding: 7 }}
      />

      <button //Botão para adicionar a tarefa
        onClick={adicionarTarefa}
        style={{ padding: 7, marginLeft: 15 }}
        disabled={!texto.trim()} //Desabilita o botão "Adicionar" se estiver vazio
      >
        Adicionar
      </button>

      <div style={{ marginTop: 30 }}>
        <button //Botão para filtrar Todas
          onClick={() => setFiltro("Todas")}
          disabled={filtro === "Todas"}
        >
          Todas
        </button>
        <button //Botão para filtrar pendentes
          onClick={() => setFiltro("Pendentes")}
          disabled={filtro === "Pendentes"}
          style={{ marginLeft: 8 }}
        >
          Pendentes
        </button>
        <button //Botão para filtrar Concluídas
          onClick={() => setFiltro("Concluídas")}
          disabled={filtro === "Concluídas"}
          style={{ marginLeft: 8 }}
        >
          Concluídas
        </button>
      </div>

      <ListaDeTarefas //Componente que lista as tarefas filtradas
        tarefas={tarefasFiltradas}
        toggleConcluida={toggleConcluida}
      />
    </div>
  );
}

export default App;
