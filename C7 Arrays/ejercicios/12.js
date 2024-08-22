function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let arregloMayus = [];
  for (let i = 0; i < array.length; i++) {
    arregloMayus.push(array[i].toUpperCase());
  }
  return arregloMayus;
}

module.exports = convertirStringAMayusculas;
