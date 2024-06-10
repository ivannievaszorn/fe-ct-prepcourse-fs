function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let elementosPorIndice = [];
  for (let i = 0; i < array.length; i++) {
    elementosPorIndice.push(array[i] * i);
  }
  return elementosPorIndice;
}

module.exports = multiplicarElementosPorIndice;
