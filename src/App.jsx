import React from 'react';
import RFC from './components/RFC';

const App = () => {
  // Ejemplo de datos que se pasarán como props
  const props = {
    nombre: 'Fernando',
    apellidoPaterno: 'Angeles',
    apellidoMaterno: 'Saavedra',
    fechaNacimiento: '1999-09-02', // Formato: YYYY-MM-DD
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>RFC</h1>
      <RFC {...props} />
    </div>
  );
};

export default App;
