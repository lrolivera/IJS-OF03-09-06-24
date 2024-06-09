const {
    calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("calculaValorPorHora", () => {
    test("valida função cálculo valor por hora",() => {
        //setup
        const rendaMensal = 5000;
        //ação
        const result = Math.ceil(rendaMensal / (8 * 22));

        //verificação
        expect(calcularValorPorHora(rendaMensal)).toBe(result)

    });

    test("forçar o teste a passar", () => {
        const rendaMensal = 5000;
        const result = 29;
        expect(calcularValorPorHora(rendaMensal)).toBe(result)
    })

  //   test("forçar o teste a falhar", () => {
  //       const rendaMensal = 5000;
  //      const result = 30;
  //       expect(calcularValorPorHora(rendaMensal)).toBe(result)
  //  })
});
