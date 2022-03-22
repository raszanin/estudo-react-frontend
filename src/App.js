import React from 'react';
import Header from './components/Header';

/**
 * Componentes
 * Propriedades
 * Estado
 */

function App() {
  return (
    <>
      <Header title='Homepage'>
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      
      <Header title='Projects'>
        <ul>
          <li>Projeto 1</li>
          <li>Projeto 2</li>
          <li>Projeto 3</li>
        </ul>
      </Header>
      
      <h3>Hello World</h3>
    </>
  )
}

export default App;