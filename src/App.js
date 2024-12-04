import React from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <header>
        <Header />
      </header>

      {/* Seção para tarefas */}
      <main>
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;
