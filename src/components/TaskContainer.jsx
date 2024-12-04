import React from 'react';
import Task from './Task';

function TaskContainer() {
  return (
    <React.Fragment>
      <h2>Lista de Tarefas</h2>
      {/* Uso do componente Task para exibir as tarefas */}
      <Task title="Tarefa 1" description="Comprar mantimentos." />
      <Task title="Tarefa 2" description="Finalizar o relatório do projeto." />
      <Task title="Tarefa 3" description="Marcar consulta médica." />
    </React.Fragment>
  );
}

export default TaskContainer;
