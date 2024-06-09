const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

<<<<<<< HEAD
const calcularPacote = (totalDeHorasPorProjeto) => {
  const resultado = Object.entries(MAX_HORAS_POR_PACOTE)
    .find(([key, value]) => value >= totalDeHorasPorProjeto);

  //if (!resultado || resultado[0] > 201) {
  //    return 0;
 // }

  //return resultado[0];
  return resultado ? resultado[0] : 0;
};
=======
const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto
)[0];
>>>>>>> 4d76fdd31b3cabf14eab898a5ed8e6388cef8bdb

exports.calcularPacote = calcularPacote;
