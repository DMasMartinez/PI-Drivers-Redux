const separarcomas = (inputString) => {
    // Verifica si la entrada es una cadena válida
    if (typeof inputString !== 'string') {
      throw new Error('La entrada debe ser una cadena de texto');
    }
  
    // Elimina espacios en blanco alrededor de las palabras y divide por comas
    const arrayResultante = inputString.trim().split(',');
  
    // Elimina elementos vacíos resultantes de espacios adicionales
    const arrayFinal = arrayResultante.filter((element) => element !== '');
  
    return arrayFinal;
  };
   

module.exports = separarcomas;
