function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let grande = [array[0]];
  let indiceGrande = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > grande) {
      grande = array[i];
      indiceGrande = i;
    }
  }
  return indiceGrande;
}

module.exports = encontrarIndiceMayor;
