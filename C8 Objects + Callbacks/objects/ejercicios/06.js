const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var cantidadDeProp = 0;
  for (const prop in objeto) {
    cantidadDeProp++;
  }
  return cantidadDeProp;
};

module.exports = contarPropiedades;
