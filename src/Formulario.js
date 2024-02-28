import React, { useState } from 'react';
import './App.css';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [banda, setBanda] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombreValido = /^[A-Za-z]+$/.test(nombre.trim());

    if (nombre.trim().length < 3 || nombre.trim().length >= 25 || nombre.trim()[0] === ' ' || banda.trim().length < 6 || banda.trim().length >= 25 || !nombreValido) {
      setMostrarError(true);
      return;
    }

    setMostrarError(false);
    setMostrarCard(true);
  };

  return (
    <div className="form-container">
      <div className="yellow-box">
        <form onSubmit={handleSubmit} className="form">
          <label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Escribe tu nombre aquí"
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={banda}
              onChange={(e) => setBanda(e.target.value)}
              placeholder="Escribe tu banda favorita aquí"
            />
          </label>
          <br />
          <button type="submit" className="submit-button">Enviar</button>
        </form>
        {mostrarError && <p className="error-message">Por favor chequea que la información sea correcta!</p>}
      </div>
      {mostrarCard && <Card nombre={nombre} banda={banda} />}
    </div>
  );
}

function Card({ nombre, banda }) {
  return (
    <div className="Card">
      <h2>Información ingresada:</h2>
      <p>Nombre: {nombre}</p>
      <p>Banda favorita: {banda}</p>
    </div>
  );
}

export default Formulario;
