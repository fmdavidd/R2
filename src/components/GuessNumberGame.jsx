// src/components/GuessNumberGame.jsx
import React, { useState } from 'react';
import '../styles/GuessNumberGame.css';

const GuessNumberGame = () => {
  const [numero, setNumero] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess, 10);
    if (userGuess > numero) {
      setMessage('Más bajo');
    } else if (userGuess < numero) {
      setMessage('Más alto');
    } else {
      setMessage('¡Correcto!');
    }
  };

  return (
    <div className="game-container">
      <form onSubmit={handleSubmit}>
        <label>Adivina el número entre 1 y 100</label>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit">Adivinar</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default GuessNumberGame;
