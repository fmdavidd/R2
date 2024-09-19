import React from 'react';
import ImageGallery from './components/ImageGallery';
import ValidatedForm from './components/ValidatedForm';
import GuessNumberGame from './components/GuessNumberGame';
import ClickButtons from './components/ClickButtons';
import NotesApp from './components/NotesApp';

const App = () => {
  return (
    <div>
      <h1>Ejercicios en React</h1>
      <ImageGallery />
      <ValidatedForm />
      <GuessNumberGame />
      <ClickButtons />
      <NotesApp />
    </div>
  );
};

export default App;
