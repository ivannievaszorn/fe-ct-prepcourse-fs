function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementosVistos = new Set();
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (elementosVistos.has(numero)) {
      return numero;
    }
    elementosVistos.add(numero);
  }
}

module.exports = encontrarElementoRepetido;