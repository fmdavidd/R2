// src/components/ClickButtons.jsx
import React from 'react';
import '../styles/ClickButtons.css';

const ClickButtons = () => {
  const handleClick = () => alert('Click simple');
  const handleDoubleClick = () => alert('Doble click');

  return (
    <div className="button-container">
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Haz clic o doble clic
      </button>
    </div>
  );
};

export default ClickButtons;
