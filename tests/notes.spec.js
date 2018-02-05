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
  // hooks para testes:
  //    before > roda uma vez antes do bloco (o it())
  //    after > roda uma vez depois do bloco
  //    beforeEach > roda todas as vezes antes de cada bloco
  //    afterEach > roda todas as vezes depois de cada bloco

  before(() => {
    console.log('before');
  });

  after(() => {
    console.log('after');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  describe('Method A', () => {
    context('Case 1', () => {
      it('Should happen foo', () => {
        // esperamos que aconteça algo aqui
      });
    });

    context('Case 2', () => {
      it('Should happen bar', () => {
        // esperamos que aconteça algo aqui
      });
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
