function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  numeros.sort((a, b) => a - b);
  let numeroInicial = numeros[0];
  let numeroFinal = numeros[numeros.length - 1];
  for (let i = numeroInicial; i < numeroFinal; i++) {
    if (!numeros.includes(i)) {
      return i;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;
