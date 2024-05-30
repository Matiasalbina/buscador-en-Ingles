// src/App.jsx
import React, { useState } from 'react';
import { palabras } from './data';
import './App.css'; // Asegúrate de tener estilos para las tarjetas y el buscador

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPalabras = palabras.filter(palabra =>
    palabra.palabra.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Buscador de Palabras</h1>
      <input
        type="text"
        placeholder="Busca una palabra..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="tarjetas">
        {filteredPalabras.map((item, index) => (
          <div key={index} className="tarjeta">
            <h2>{item.palabra}</h2>
            <p>Tipo: {item.tipo}</p>
            {item.tipo === 'verbo' && (
              <div>
                <p>Presente: {item.formas.presente.forma} ({item.formas.presente.pronunciacion})</p>
                <p>Pasado: {item.formas.pasado.forma} ({item.formas.pasado.pronunciacion})</p>
                <p>Futuro: {item.formas.futuro.forma} ({item.formas.futuro.pronunciacion})</p>
                <p>Presente Continuo: {item.formas.presenteContinuo.forma} ({item.formas.presenteContinuo.pronunciacion})</p>
                <p>Pasado Continuo: {item.formas.pasadoContinuo.forma} ({item.formas.pasadoContinuo.pronunciacion})</p>
                <p>Pasado Participio: {item.formas.pasadoParticipio.forma} ({item.formas.pasadoParticipio.pronunciacion})</p>
              </div>
            )}
            {item.tipo !== 'verbo' && (
              <p>Pronunciación: {item.pronunciacion}</p>
            )}
            {item.comparativo && (
              <p>Comparativo: {item.comparativo}</p>
            )}
            {item.superlativo && (
              <p>Superlativo: {item.superlativo}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
