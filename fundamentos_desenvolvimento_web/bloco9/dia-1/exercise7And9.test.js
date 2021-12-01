// Exercise 7

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe("TESTE DA FUNCAO UPPERCASE", () => {
  it("retorna corretamente a funcao", (done) => {
    uppercase("test", (str) => {
      try {
        expect(str).toBe("TEST");
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

// Exercise 9
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercise8");

describe("A função getPokemonDetails", () => {
  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const result = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf'
    function callback(erro, frase) {
        expect(frase).toBe(result);
        done();
    }
    getPokemonDetails(
      (pokemon) => pokemon.name === "Bulbasaur",
      callback
    )
  });

  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const resultError = new Error("Não temos esse pokémon para você :(")
    function callback(erro, frase) { 
        expect(erro).toEqual(resultError);
        done();
    }
    getPokemonDetails(
      (pokemon) => pokemon.name === "Bulbassaur",
      callback
    )
  });
});