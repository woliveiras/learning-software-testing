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
  // devemos definir as variáveis fora dos hooks
  //   para que elas sejam acessíveis no restante do
  //   script de teste
  var arr;

  // hooks para testes:
  //    before > roda uma vez antes do bloco (o it())
  //    after > roda uma vez depois do bloco
  //    beforeEach > roda todas as vezes antes de cada bloco
  //    afterEach > roda todas as vezes depois de cada bloco
  // os hooks ajudam para que não criemos dependência entre testes

  before(() => {
    // podemos iniciar uma conexão com um bancos de dados aqui
    console.log('before');
  });

  after(() => {
    // e fechar a conexão com o banco de dados aqui
    console.log('after');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    arr = [1, 2, 3];
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
    context('Case 1 for Method B', () => {
      it('Should have a size of 4 when push another value into the array', () => {
        arr.push(4);

        console.log(arr.length);
      });
      it('Should have a size of 2 when pop a value from the array', () => {
        arr.pop();

        console.log(arr.length);
      });
      it('Should remove the value 3 when use pop in the array', () => {
        console.log(arr.pop() === 3);
      });
    });
  });
});
