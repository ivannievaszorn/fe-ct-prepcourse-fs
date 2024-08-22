function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  const array = texto.split("");
  const stringInvertido = array.reverse().join("");
  return stringInvertido;
}

module.exports = invertirTexto;
