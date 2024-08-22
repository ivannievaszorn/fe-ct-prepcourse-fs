function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumaDeElementos = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    sumaDeElementos += arrayOfNums[i];
  }
  return sumaDeElementos; 
}

module.exports = agregarNumeros;
