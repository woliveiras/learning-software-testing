// describe() serve para testarmos os nossos métodos,
//   modulos, classes
// podemos ter vários describes dentro de um mesmo
//    arquivo
// ---
// context() serve para separar o contexto da execução
//   de um método
// context serve para separar contextos de testes
//   para casos de testes de diferentes comportamentos
//   em um mesmo método
// o it() é quem realmente vai executar os comandos
describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it('Should happen blablabla', () => {
        // esperamos que aconteça algo aqui
      });
    });

    context('Case 2', () => {

    });

    context('Case 3', () => {
      it.skip('Skiped Test', () => {
        // podemos usar o skip para pular um teste
      });
    });

  });

  describe('Method B', () => {

  });
});
