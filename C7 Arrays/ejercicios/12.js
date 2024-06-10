function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  mayusculas = [];
  for (let i = 0; i < array.length; i++) {
    mayusculas[i] = array[i].toUpperCase();
  }
  return mayusculas;
}

module.exports = convertirStringAMayusculas;
