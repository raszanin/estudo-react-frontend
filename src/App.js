import React, { useState } from 'react';
import Header from './components/Header';

/**
 * Componentes
 * Propriedades
 * Estado & Imutabilidade
 */

/**
 * useState retorna um array com 2 posiçoes
 * 
 * 1. Variável com seu valor inicial
 * 2. Função para atualizarmos esse valor
 */

function App() {
  const [projects, setProjects] = useState([
    'Desenvolvimento de App',
    'Front-end Web',
    'Back-end Node'
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo Projeto ${Date.now()}`])
  }

  return (
    <>
      <Header title='Projects' />

      <ul>
        {projects.map(project => {
          return <li key={project}>{project}</li>
        })}
      </ul>
      
      <button type='button' onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;