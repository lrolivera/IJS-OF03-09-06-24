const {
    calcularPacote,
} = require("../../dominio/calculadora/Projeto/pacote");

describe("Retorna qual o pacote de acordo com o número de horas", () => {
    test("Retorna se é um pacote básico",() => {
        //setup
        const totalDeHorasBasico = 49;

        //ação
        const result = calcularPacote(totalDeHorasBasico);

        //verificação
        expect(result).toBe("pacote_basico");
    });

    test("Retorna se é um pacote Intermediário",() => {
        //setup
        const totalDeHorasIntermediario = 51;

        //ação
        const result = calcularPacote(totalDeHorasIntermediario);

        //verificação
        expect(result).toBe("pacote_intermediario");
    });

    test("Retorna se é um pacote Intermediário",() => {
        //setup
        const totalDeHorasPremium = 101;

        //ação
        const result = calcularPacote(totalDeHorasPremium);

        //verificação
        expect(result).toBe("pacote_premium");
    });

    test("Retorna se é um pacote 50", () => {
        // Setup
        const totalDeHorasBasic = 50;

        // Ação
        const result = calcularPacote(totalDeHorasBasic);

        // Verificação
        expect(result).toBe("pacote_basico");
    });

    test("Retorna se é um pacote 100", () => {
        // Setup
        const totalDeHorasInt = 100;

        // Ação
        const result = calcularPacote(totalDeHorasInt);

        // Verificação
        expect(result).toBe("pacote_intermediario");
    });

    test("Retorna se é um pacote 200", () => {
        // Setup
        const totalDeHorasPrem = 200;

        // Ação
        const result = calcularPacote(totalDeHorasPrem);

        // Verificação
        expect(result).toBe("pacote_premium");
    });

    test("Retorna se é um pacote 0", () => {
        // Setup
        const totalDeHorasZero = 0;
  
        // Ação
        const result = calcularPacote(totalDeHorasZero);

        // Verificação
       expect(result).toBe("pacote_basico");
    });

   // test("Retorna se é um pacote 201", () => {
        // Setup
   //     const totalDeHorasMais = 201;

        // Ação
    //   const result = calcularPacote(totalDeHorasMais);

        // Verificação
     //   expect(result).toBe("pacote_premium");
  //  });
});

