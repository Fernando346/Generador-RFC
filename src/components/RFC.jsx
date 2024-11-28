import React from 'react';

const RFC = ({ nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento }) => {
  // Función para obtener la primera vocal de un texto
  const obtenerPrimeraVocal = (texto) => {
    const vocales = 'AEIOU';
    for (let letra of texto.toUpperCase()) {
      if (vocales.includes(letra)) return letra;
    }
    return '';
  };

  // Construcción del RFC
  const generarRFC = () => {
    const apPaterno = apellidoPaterno.toUpperCase();
    const apMaterno = apellidoMaterno.toUpperCase();
    const nom = nombre.toUpperCase();
    const fecha = fechaNacimiento.split('-'); // YYYY-MM-DD

    // Reglas para el RFC
    const primeraLetraPaterno = apPaterno.charAt(0);
    const primeraVocalPaterno = obtenerPrimeraVocal(apPaterno.slice(1));
    const primeraLetraMaterno = apMaterno.charAt(0);
    const primeraLetraNombre = nom.charAt(0);
    const año = fecha[0].slice(2, 4); // Últimos 2 dígitos del año
    const mes = fecha[1];
    const dia = fecha[2];

    return (
      primeraLetraPaterno +
      primeraVocalPaterno +
      primeraLetraMaterno +
      primeraLetraNombre +
      año +
      dia +
      mes
    );
  };

  // Generar RFC
  const rfc = generarRFC();

  return (
    <div>
      <h2>Datos de RFC:</h2>
      <p>
        Nombre: {nombre} {apellidoPaterno} {apellidoMaterno}
      </p>
      <p>Fecha de nacimiento: {fechaNacimiento}</p>
      <h3>RFC Generado:</h3>
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{rfc}</p>
    </div>
  );
};

export default RFC;
