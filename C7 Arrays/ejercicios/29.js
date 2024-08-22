function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  let min = Math.min(...numeros);
  let max = Math.max(...numeros);
  let secuenciaCompleta = [];
  for (let i = min; i <= max; i++) {
    secuenciaCompleta.push(i);
  }
  for (let num of secuenciaCompleta) {
    if (!numeros.includes(num)) {
      return num;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;

console.log(arrayMax);