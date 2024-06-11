function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let stringsConA = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i][0] === "a") {
      stringsConA.push(arrayOfStrings[i]);
    }
  }
  return stringsConA;
}

module.exports = filter;
