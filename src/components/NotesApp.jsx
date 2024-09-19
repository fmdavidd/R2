// src/components/NotesApp.jsx
import React, { useState, useEffect } from 'react';
import '../styles/NotesApp.css';

const NotesApp = () => {
  const [nota, setNota] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSavedMessage('Nota guardada automáticamente');
    }, 2000);

    return () => {
      clearTimeout(timer);
      setSavedMessage('');
    };
  }, [nota]);

  return (
    <div className="notes-container">
      <textarea
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        placeholder="Escribe tu nota aquí..."
      />
      <p>{savedMessage}</p>
    </div>
  );
};

export default NotesApp;
