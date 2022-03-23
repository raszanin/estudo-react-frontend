import React, { useState, useEffect } from 'react';
import Header from './components/Header';

import api from "./services/api";

import './App.css';


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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
      console.log(projects)
    })
   }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo Projeto ${Date.now()}`])

    const response = await api.post('projects', {
      title: `Projeto ${Date.now()}`,
      owner: "Roberto Zanin"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title='Projects' />

      <ul>
        {projects.map(project => {
          return <li key={project.id}>{project.title} / {project.owner}</li>
        })}
      </ul>
      
      <button type='button' onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App;